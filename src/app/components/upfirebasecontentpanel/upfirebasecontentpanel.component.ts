
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { UpFirebaseListComponent } from '../upfirebaselist/upfirebaselist.component';
import { UpListComponent } from '../uplist/uplist.component';
import { UpPieChartComponent } from '../uppiechart/uppiechart.component';
import { Campaign } from '../../services/campaign';
import { CampaignService } from '../../services/campaign.service';
import { PostService } from '../../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'upfirebase-content-panel',
  templateUrl: 'upfirebasecontentpanel.component.html',
  directives: [UpFirebaseListComponent, UpListComponent, UpPieChartComponent],
  styleUrls: ['upfirebasecontentpanel.component.css'],
  providers: [ CampaignService, PostService, HTTP_PROVIDERS ]
})
export class UpFirebaseContentPanelComponent {
  // item: FirebaseObjectObservable<any>;
  // items: FirebaseListObservable<any[]>;
  // constructor(af: AngularFire) {
  //   this.item = af.database.object('/customers/Sprout for Business/');
  //   this.items = af.database.list('/customers/Sprout for Business/constant_contact_campaign_summaries');
  // }

}
