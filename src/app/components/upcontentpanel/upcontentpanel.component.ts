import { Component, OnInit, Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Observable} from 'rxjs/observable';

import { UpListComponent } from '../uplist/uplist.component';
import { UpfirebaseListDataService } from '../uplist/upfirebaselistdata.service';
import { UplistService } from '../uplist/uplist.service';
import { UpPieChartComponent } from '../uppiechart/uppiechart.component';
import { PieChartData } from '../uppiechart/piechartdata.interface';
import { ListData } from '../uplist/listdata.interface'
// import { Post } from '../../services/post';

@Component({
  moduleId: module.id,
  selector: 'upcontent-panel',
  templateUrl: 'upcontentpanel.component.html',
  directives: [UpListComponent, UpPieChartComponent],
  styleUrls: ['upcontentpanel.component.css'],
  providers: [ UplistService, UpfirebaseListDataService, HTTP_PROVIDERS ]
})
export class UpContentPanelComponent implements OnInit {
  private listTitle: string;
  private liTitleKey: string;
  private liDetailKeys: string[];
  private liItems: Observable<Object[]>;
  private pieChartData: Observable<PieChartData>;

  private afListData:ListData;
  
  constructor(private _uplistService: UplistService, private _upfirebaseDLS:UpfirebaseListDataService) {
    console.log('[ UpLoginPageComponent.constructor');
    this.afListData = this._uplistService.getDummyListData();
    this._uplistService.updateListData(this.afListData);    
    // initialize _upfirebaseDLS list title
    this._upfirebaseDLS.initializeListTitle('/customers/Sprout for Business/');
    // initializes _upfirebaseDLS listData object
    this._upfirebaseDLS.initializeListData(
                              "Test List Title from upcontentpanel", 
                              "campaignTitle", 
                              ['clickThrough','openRate','totalSent','timeSent'], 
                              '/customers/Sprout for Business/constant_contact_campaign_summaries' );
    // bind this.afListData to _upfirebaseDLS listData object
    this._upfirebaseDLS.listData$.subscribe( res => this.afListData = res );
  }
  ngOnInit() {
    console.log('[ UpContentPanelComponent.ngOnInit');
    // pass observable to uplist child
    // this.liItems = this._uplistService.liItems$;
    // pass observable to uppiechart child
    this.pieChartData = this._uplistService.pieChartData$;
    // Update data
    this._uplistService.updateListData(this.afListData);
    // OR if passing the observable to the template and using the async pipe 
    //this.data = _testService.testData$;
    console.log('...pieChartData fetched');
    console.log('..._uplistService.listData updated');
    console.log('...end of UpContentPanelComponent.ngOnInit');
  }
  // ToDo:
  // create service TestListService
  //   service pulls data from test api
  //   service packages data into data Object
  //   contentpanel retrieves data from service 
  //   contentpanel unpacks data and hands to UpListComponent
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