// This file is required by karma.conf.js and loads recursively all the .spec and framework files
require('zone.js/dist/zone-testing');
const getTestBed  = require('@angular/core/testing').getTestBed;
const BrowserDynamicTestingModule  = require('@angular/platform-browser-dynamic/testing').BrowserDynamicTestingModule;
const platformBrowserDynamicTesting  = require('@angular/platform-browser-dynamic/testing').platformBrowserDynamicTesting;

import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/withLatestFrom';

// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const contextApps = require.context('./apps', true, /\.spec\.ts$/);
// And load the modules.
contextApps.keys().map(contextApps);

const contextLibs = require.context('./libs', true, /\.spec\.ts$/);
// And load the modules.
contextLibs.keys().map(contextLibs);

// Finally, start Karma to run the tests.
__karma__.start();
