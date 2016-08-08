import { Component } from '@angular/core';
import { UpHeaderComponent } from './components/upheader/upheader.component';
import { UpFirebaseContentPanelComponent } from './components/upfirebasecontentpanel/upfirebasecontentpanel.component';
import { UpFirebaseListComponent } from './components/upfirebaselist/upfirebaselist.component';
import { UpPieChartComponent } from './components/uppiechart/uppiechart.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [UpHeaderComponent, UpFirebaseContentPanelComponent],
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
