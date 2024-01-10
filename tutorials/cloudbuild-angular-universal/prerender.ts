// Load zone.js for the server.
import 'zone.js/dist/zone-node/node_modules/zone.js/dist/zone-node.js';
import 'reflect-metadata';
import {readFileSync, writeFileSync, existsSync, mkdirSync} from 'fs';
import {join} from 'path';

import {enableProdMode} from '@angular/core';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import {renderModuleFactory} from '@angular/platform-server';
const ROUTES=['/heroes','/dashboard'];
const DIST_FOLDER = join(process.cwd(), 'dist');
console.log(DIST_FOLDER);
// * NOTE :: leave this as require() since this file is built dynamically from webpack
const MAIN = join(DIST_FOLDER,'/server/main.js'); 
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

const BROWSER_FOLDER = join(DIST_FOLDER, 'browser');

// Load the index.html file containing references to your application bundle.
const index = readFileSync(join(BROWSER_FOLDER, 'index.html'), 'utf8');

let previousRender = Promise.resolve();

// Iterate each route path
ROUTES.forEach(route => {
  const fullPath = join(BROWSER_FOLDER, route);

  // Make sure the directory structure is there
  if (!existsSync(fullPath)) {
    mkdirSync(fullPath);
  }

  // Writes rendered HTML to index.html, replacing the file if it already exists.
  previousRender = previousRender.then(_ => renderModuleFactory(AppServerModuleNgFactory, {
    document: index,
    url: route,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  })).then(html => writeFileSync(join(fullPath, 'index.html'), html));
});
