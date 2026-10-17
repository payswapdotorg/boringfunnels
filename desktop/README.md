# boringfunnels — desktop edition (Ubuntu)

A self-contained Ubuntu desktop package of the boringfunnels product. The
Electron shell starts the local Next.js production server (`next start` under
`ELECTRON_RUN_AS_NODE` — the bundled Electron binary doubles as the Node
runtime, so nothing else needs to be installed) and opens the product in its
own window. Fully offline, fully local.

## Install (Ubuntu 22.04 / 24.04+, amd64)

```bash
# download boringfunnels-desktop_1.0.0_amd64.deb from the repo's Releases page
sudo apt install ./boringfunnels-desktop_1.0.0_amd64.deb   # resolves the few system libs
# or, equivalently:
#   sudo dpkg -i boringfunnels-desktop_1.0.0_amd64.deb && sudo apt -f install
```

Then launch **boringfunnels** from your application menu, or run `boringfunnels`
in a terminal.

## What you get

| | |
|---|---|
| Window | The full product: home, library + every teardown, funnel math, buy page, account portal |
| Server | Local only, `127.0.0.1:3210` (next free port up to 3219; override with `BORINGFUNNELS_PORT`) |
| Data | Sessions and logs in `~/.config/boringfunnels/` (server log: `server.log`) |
| Network | None. The app makes no outbound requests |
| Files | `/opt/boringfunnels-desktop/`, `/usr/bin/boringfunnels`, menu entry + icons |

Remove with `sudo apt remove boringfunnels-desktop` (add `--purge` to also
clear `~/.config/boringfunnels`).

## Build from source

From a checkout of this repo with a production build present
(`bun install && bun run build`):

```bash
desktop/build-deb.sh                   # output in /tmp/bf-deb-work/*.deb
WORK=/somewhere desktop/build-deb.sh   # custom staging dir
```

The script downloads the pinned Electron build (`ELECTRON_VERSION`), copies
the production tree (pruning build-only packages), renders the icon set, and
packs the .deb with `dpkg-deb`. Set `HARDLINK=1` on the same filesystem to
speed up local iteration.

## Notes

- The Electron sandbox helper (`chrome-sandbox`) is installed setuid-root by
  `postinst` — the standard, secure Electron packaging arrangement.
- A watchdog sits between the shell and the server: if the window is killed
  abruptly, the local server never lingers as an orphan.
- `desktop/make-icons.py` regenerates the icon set from the product mark.
