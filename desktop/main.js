'use strict';

// boringfunnels — desktop edition (Electron shell).
//
// Runs the local Next.js production server as a child process
// (ELECTRON_RUN_AS_NODE) and opens the product in its own window.
// Fully local: no browser install and no internet connection required.

const { app, BrowserWindow, Menu, dialog, shell } = require('electron');
const path = require('node:path');
const http = require('node:http');
const net = require('node:net');
const fs = require('node:fs');
const { spawn } = require('node:child_process');

const PKG_ROOT = path.dirname(path.dirname(__dirname)); // .../resources/app -> .../resources -> package root (/opt/boringfunnels-desktop)
const APP_DIR = path.join(PKG_ROOT, 'app'); // the Next.js production tree
const ICON = path.join(__dirname, 'icons', 'boringfunnels-512.png');

const PORT_ENV = Number(process.env.BORINGFUNNELS_PORT) || 0;
const PORT_BASE = 3210;
const PORT_TRIES = 10;
const SERVER_START_TIMEOUT_MS = 60000;

// Troubleshooting facility: set BORINGFUNNELS_DEBUG_FILE=/path/to/markers to
// trace startup step-by-step (used by the packaging test-harness).
const DEBUG_MARK = process.env.BORINGFUNNELS_DEBUG_FILE || '';
const mark = (s) => {
  if (!DEBUG_MARK) return;
  try {
    fs.appendFileSync(DEBUG_MARK, `${new Date().toISOString()} ${s}\n`);
  } catch (_) {
    /* best-effort */
  }
};

// Allow a redirected userData dir (used by the packaging test-harness).
if (process.env.BORINGFUNNELS_USER_DATA) {
  app.setPath('userData', process.env.BORINGFUNNELS_USER_DATA);
}
fs.mkdirSync(app.getPath('userData'), { recursive: true });
const logStream = fs.createWriteStream(path.join(app.getPath('userData'), 'server.log'), { flags: 'a' });
const log = (line) => {
  const stamped = `[${new Date().toISOString()}] ${line}\n`;
  process.stdout.write(stamped);
  logStream.write(stamped);
};

// The Next server runs under a watchdog so an abrupt shell exit can never
// orphan it: if the Electron process dies, the watchdog (re-parented to
// init) kills the server and exits.
const WATCHDOG = [
  "const { spawn } = require('child_process');",
  '// With `node -e SCRIPT arg...`, the args start at argv[1].',
  'const child = spawn(process.execPath, process.argv.slice(1), { stdio: "inherit" });',
  'const t = setInterval(() => { if (process.ppid === 1) { child.kill("SIGTERM"); process.exit(0); } }, 2000);',
  'child.on("exit", (c) => { clearInterval(t); process.exit(c == null ? 0 : c); });',
  'process.on("SIGTERM", () => { child.kill("SIGTERM"); });',
].join('\n');

let server = null;
let win = null;
let quitting = false;

const page = (title, bodyHtml) =>
  'data:text/html;charset=utf-8,' +
  encodeURIComponent(
    `<!doctype html><meta charset="utf-8"><title>${title}</title>` +
    `<body style="margin:0;background:#f3f5ec;color:#20251e;` +
    `font:16px/1.6 system-ui,-apple-system,sans-serif">` +
    `<div style="max-width:560px;margin:0 auto;padding:64px 24px">${bodyHtml}</div></body>`,
  );

const LOADING_PAGE = page(
  'boringfunnels',
  `<div style="text-align:center;margin-top:96px">
     <div style="font-size:40px;font-weight:700;letter-spacing:-1px">boringfunnels</div>
     <p style="color:#6a7362">Starting your local library&hellip;</p>
   </div>`,
);

const ERROR_PAGE = (heading, detail) =>
  page(
    'boringfunnels',
    `<div style="margin-top:72px">
       <h1 style="font-size:24px">${heading}</h1>
       <p style="color:#6a7362">${detail}</p>
       <p style="color:#6a7362">Details are in <code>~/.config/boringfunnels/server.log</code>.</p>
     </div>`,
  );

function pickPort() {
  return new Promise((resolve, reject) => {
    let i = 0;
    const tryNext = () => {
      const port = PORT_BASE + i;
      const srv = net.createServer();
      srv.once('error', () => {
        i += 1;
        if (i >= PORT_TRIES) {
          reject(new Error(`no free port in ${PORT_BASE}-${PORT_BASE + PORT_TRIES - 1}`));
        } else {
          tryNext();
        }
      });
      srv.once('listening', () => srv.close(() => resolve(port)));
      srv.listen(port, '127.0.0.1');
    };
    tryNext();
  });
}

function waitForServer(port, timeoutMs, isDead) {
  const startedAt = Date.now();
  return new Promise((resolve, reject) => {
    const attempt = () => {
      if (isDead()) return reject(new Error('the local server exited while starting'));
      const req = http.get({ host: '127.0.0.1', port, path: '/', timeout: 2500 }, (res) => {
        res.resume();
        resolve(undefined);
      });
      req.on('timeout', () => req.destroy(new Error('timeout')));
      req.on('error', () => {
        if (Date.now() - startedAt > timeoutMs) {
          reject(new Error('the local server did not answer in time'));
        } else {
          setTimeout(attempt, 350);
        }
      });
    };
    attempt();
  });
}

function startServer(port) {
  const nextCli = path.join(APP_DIR, 'node_modules', 'next', 'dist', 'bin', 'next');
  if (!fs.existsSync(nextCli)) throw new Error(`server entry missing: ${nextCli}`);
  const env = {
    ...process.env,
    ELECTRON_RUN_AS_NODE: '1',
    NODE_ENV: 'production',
    NEXT_TELEMETRY_DISABLED: '1',
  };
  const child = spawn(
    process.execPath,
    ['-e', WATCHDOG, nextCli, 'start', '-p', String(port), '-H', '127.0.0.1'],
    { cwd: APP_DIR, env, stdio: ['ignore', 'pipe', 'pipe'] },
  );
  mark(`server spawned on port ${port} (pid ${child.pid})`);
  log(`server starting on 127.0.0.1:${port} (pid ${child.pid})`);
  const forward = (d) => logStream.write(d);
  child.stdout.on('data', forward);
  child.stderr.on('data', forward);
  let dead = false;
  child.on('exit', (code) => {
    dead = true;
    log(`server exited (code ${code == null ? 'signal' : code})`);
    if (!quitting && win && !win.isDestroyed()) {
      win.loadURL(
        ERROR_PAGE('The local server stopped.', 'Restart the app; if it keeps happening, reinstall the package.'),
      );
    }
  });
  return { proc: child, isDead: () => dead };
}

async function createWindow() {
  mark('createWindow: constructing window');
  win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 720,
    minHeight: 600,
    backgroundColor: '#f3f5ec',
    title: 'boringfunnels',
    icon: fs.existsSync(ICON) ? ICON : undefined,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  win.once('ready-to-show', () => {
    mark('window: ready-to-show');
    win.show();
  });
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  const port = PORT_ENV || (await pickPort());
  mark(`port selected: ${port}`);
  win.loadURL(LOADING_PAGE);
  const { proc, isDead } = startServer(port);
  server = proc;
  try {
    await waitForServer(port, SERVER_START_TIMEOUT_MS, isDead);
    mark('waitForServer: server healthy');
    if (!win || win.isDestroyed()) return;
    await win.loadURL(`http://127.0.0.1:${port}/`);
    mark(`window loaded http://127.0.0.1:${port}/`);
    log(`window loaded http://127.0.0.1:${port}/`);
  } catch (err) {
    log(`startup failed: ${err && err.message}`);
    if (win && !win.isDestroyed()) {
      win.loadURL(ERROR_PAGE('Could not start the local server.', String((err && err.message) || err)));
    }
  }
}

const gotLock = app.requestSingleInstanceLock();
mark(`single-instance lock: ${gotLock}`);
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    const w = BrowserWindow.getAllWindows()[0];
    if (w) {
      if (w.isMinimized()) w.restore();
      w.focus();
    }
  });

  app.whenReady().then(() => {
    mark('app ready');
    Menu.setApplicationMenu(null);
    createWindow().catch((err) => {
      const msg = String((err && (err.stack || err.message)) || err);
      mark(`createWindow FAILED: ${msg}`);
      log(`FATAL: ${msg}`);
      // Non-blocking error surface: an in-window page when possible, plus the
      // log — a native modal dialog would wedge headless/session environments.
      if (win && !win.isDestroyed()) {
        win.show();
        win.loadURL(ERROR_PAGE('Something went wrong starting boringfunnels.', String((err && err.message) || err)));
      }
      setTimeout(() => app.quit(), 8000);
    });
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow().catch(() => {});
      }
    });
  });

  app.on('window-all-closed', () => {
    app.quit();
  });

  const shutdown = () => {
    quitting = true;
    if (server) {
      try {
        server.kill('SIGTERM');
      } catch (_) {
        /* already gone */
      }
    }
  };
  app.on('before-quit', shutdown);
  process.on('SIGTERM', () => app.quit());
  process.on('SIGINT', () => app.quit());
}
