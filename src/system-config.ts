"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'firebase': 'vendor/firebase/firebase.js',
  'angularfire2': 'vendor/angularfire2',
  'ng2-charts': 'vendor/ng2-charts/',
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'moment': 'vendor/moment/moment.js',
  'angular2': 'vendor/angular2/',
  'bootstrap': 'vendor/bootstrap/',
  'bootstrap-social': 'vendor/bootstrap-social/',
  'font-awesome': 'vendor/font-awesome/'
};

/** User packages configuration. */
const packages: any = {
  angularfire2: {
    defaultExtension: 'js',
    main: 'angularfire2.js'
  },
  angular2: {
    defaultExtension: 'js',
    main: 'angular.js'
  },
  'ng2-charts': {
    main: 'ng2-charts.js',
    defaultExtension: 'js'
  },
  'ng2-bootstrap': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'ng2-bootstrap.js'
  },
  'bootstrap': {
    format: 'cjs',
    defaultExtension: 'css',
    main: 'bootstrap.min.css'
  },
  'bootstrap-social': {
    format: 'cjs',
    defaultExtension: 'css',
    main: 'bootstrap-social.css'
  },
  'moment': {
    format: 'cjs'
  },
  'font-awesome': {
    format: 'cjs',
    defaultExtension: 'css',
    main: 'font-awesome.min.css">'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
