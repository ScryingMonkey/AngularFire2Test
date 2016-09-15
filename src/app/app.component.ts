import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ROUTER_DIRECTIVES }   from '@angular/router';

import { UpHeaderComponent } from './components/upheader/upheader.component';
import { UpheaderComponent02 } from './components/upheader02/upheader02.component';
import { UpFirebaseContentPanelComponent } from './components/upfirebasecontentpanel/upfirebasecontentpanel.component';
import { UpContentPanelComponent } from './components/upcontentpanel/upcontentpanel.component';
import { UpUserContentPanelComponent } from './components/upusercontentpanel/upusercontentpanel.component';
import { UpLoginPageComponent } from './components/uploginpage/uploginpage.component';

import { AuthService } from './services/auth.service';

  // Initialize router Needs:
  //   import for provideRouter in main.ts
  //   import RouterOutler in app.component.ts
  //   <router-outlet></router-outlet> tag in app.component.html
    // RouteConfig array defined (ex in app.routes.ts)
  //   provideRouter(TestAppRoutes) in list of providers in main.ts

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [UpHeaderComponent,
                UpheaderComponent02, 
                UpFirebaseContentPanelComponent, 
                UpContentPanelComponent,
                UpLoginPageComponent,
                UpUserContentPanelComponent,
                RouterOutlet,
                ROUTER_DIRECTIVES ],
  styleUrls: ['app.component.css'],
  providers: [ AuthService ]
})
export class AppComponent {
  // item: FirebaseObjectObservable<any>;
  // items: FirebaseListObservable<any[]>;
  // constructor(af: AngularFire) {
  //   this.item = af.database.object('/customers/Sprout for Business/');
  //   this.items = af.database.list('/customers/Sprout for Business/constant_contact_campaign_summaries');
  // }
}
