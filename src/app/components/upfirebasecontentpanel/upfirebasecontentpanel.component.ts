
import { Component, OnInit, Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Observable} from 'rxjs/observable';

import { UpListComponent } from '../uplist/uplist.component';
import { UpPieChartComponent } from '../uppiechart/uppiechart.component';
import { Campaign } from '../../services/campaign';
import { CampaignService } from '../../services/campaign.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../services/post';

@Component({
  moduleId: module.id,
  selector: 'upfirebase-content-panel',
  templateUrl: 'upfirebasecontentpanel.component.html',
  directives: [UpListComponent, UpPieChartComponent],
  styleUrls: ['upfirebasecontentpanel.component.css'],
  providers: [ CampaignService, PostService, HTTP_PROVIDERS ]
})
export class UpFirebaseContentPanelComponent implements OnInit {
  private afItem: FirebaseObjectObservable<any>;
  private afItems: FirebaseListObservable<any[]>;
  private afListTitle: string;
  private afLiTitleKey: string;
  private afDetailLabels: Array<string>;
  private afListKeys: Array<string>;

  constructor(private _af: AngularFire, private _postService: PostService) {
  console.log('...in UpListComponent.constructor');
  }
  ngOnInit() {
    this.afItem = this._af.database.object('/customers/Sprout for Business/');
    // this.afItems = this._af.database.list('/customers/Sprout for Business/constant_contact_campaign_summaries');
    // this.afItem.subscribe(item => (this.afListTitle = item.customerName));
    // this.afLiTitleKey = 'campaignTitle';
    // this.afDetailLabels = ['clickThrough', 'openRate', 'totalSent'];
    // this.afListKeys = ['clickThrough', 'openRate', 'totalSent'];

    // this.testListItems = this._postService.getPosts();
    // this.testListTitle = 'Dummy Title';
    // this.testListLiTitleKey = 'title';
    // this.testDetailLabels = [];
    // this.testListKeys = ['body'];

    console.log('...in UpFirebaseContentPanelComponent.ngOnInit() ...fetched items');
  }
  // ToDo:
  // on click in uplist:
  //   create a clickObject with keysToDisplay,
  //   output click Objest to contentPane,
  //   input clickObject in contentPane
  //   log clickObject
  //   push clickObject to chart
  // commit
  // Create login page with authentication
  // Deploy to web
  // Celebrate!
}
