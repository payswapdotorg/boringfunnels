'use strict';

// Minimal, sandboxed bridge. The product itself is a plain web app and needs
// nothing from the shell; this only exposes a small "am I on desktop?" surface
// for the packaged build (and future desktop-only affordances).

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('boringfunnelsDesktop', {
  desktop: true,
  platform: process.platform,
  versions: {
    electron: process.versions.electron,
    node: process.versions.node,
  },
});
