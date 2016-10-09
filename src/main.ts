import { bootstrap } from '@angular/platform-browser-dynamic';
 import { provideRouter } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';
import {TestAppRoutes} from './app/app.routes'
// import { disableDeprecatedForms, provideForms } from '@angular/forms';
// import { routeConfig } from './app/routerconfigs/router.config';


if (environment.production) {
  enableProdMode();
}


bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase({
    apiKey: "AIzaSyD-XIYtmEXlQMy4uufzp_Mrxai253u_6fE",
    authDomain: "project-3617555751812177585.firebaseapp.com",
    databaseURL: "https://project-3617555751812177585.firebaseio.com",
    storageBucket: "project-3617555751812177585.appspot.com"
  }),
  // Initialize router:
  // Needs:
  //   imports for provideRouter here and RouterOutler in app.component.ts
  //   <router-outlet></router-outlet> tag in app.component.html
  //   RouteConfig array defined (ex in app.routes.ts)
  provideRouter(TestAppRoutes)
  // disableDeprecatedForms(),
  // provideForms()
])
.catch((err: any) => console.error(err));
