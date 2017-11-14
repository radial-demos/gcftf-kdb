'use strict';

/*
  Browser-Sync server for serving static content
*/

require('dotenv').config();
const bs = require('browser-sync').create();

bs.init({
  port: 8080,
  open: false,
  reloadDelay: 500,
  files: ['./views'],
  proxy: `http://127.0.0.1:${process.env.PORT}`,
  serveStatic: [{
    directory: true,
    route: '/assets',
    dir: 'public/assets',
  }],
});
