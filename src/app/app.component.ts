import { Component } from '@angular/core';
import { UpHeaderComponent } from './components/upheader/upheader.component';
import { UpFirebaseContentPanelComponent } from './components/upfirebasecontentpanel/upfirebasecontentpanel.component';
import { UpContentPanelComponent } from './components/upcontentpanel/upcontentpanel.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [UpHeaderComponent, UpFirebaseContentPanelComponent, UpContentPanelComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  // item: FirebaseObjectObservable<any>;
  // items: FirebaseListObservable<any[]>;
  // constructor(af: AngularFire) {
  //   this.item = af.database.object('/customers/Sprout for Business/');
  //   this.items = af.database.list('/customers/Sprout for Business/constant_contact_campaign_summaries');
  // }
}
