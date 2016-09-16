import { Component, OnInit, Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Observable} from 'rxjs/observable';

import { UpListComponent } from '../uplist/uplist.component';
import { UplistService } from '../uplist/uplist.service';
import { UpPieChartComponent } from '../uppiechart/uppiechart.component';
import { PieChartData } from '../uppiechart/piechartdata.interface';
// import { Post } from '../../services/post';

@Component({
  moduleId: module.id,
  selector: 'upcontent-panel',
  templateUrl: 'upcontentpanel.component.html',
  directives: [UpListComponent, UpPieChartComponent],
  styleUrls: ['upcontentpanel.component.css'],
  providers: [ UplistService, HTTP_PROVIDERS ]
})
export class UpContentPanelComponent implements OnInit {
  private listTitle: string;
  private liTitleKey: string;
  private liDetailKeys: string[];
  private liItems: Observable<Object[]>;
  private pieChartData: Observable<PieChartData>;

  constructor(private _uplistService: UplistService) {
    console.log('[ UpLoginPageComponent.constructor');
    // Establish subcriptons
    // this._uplistService.listTitle$.subscribe(
    //                   (listTitle:string) => this.listTitle = listTitle,
    //                   (error:any) => console.error(error)
    //                   );
  }
  ngOnInit() {
    console.log('[ UpContentPanelComponent.ngOnInit');
    // pass observable to uplist child
    // this.liItems = this._uplistService.liItems$;
    // pass observable to uppiechart child
    this.pieChartData = this._uplistService.pieChartData$;
    // Update data
    this._uplistService.updateListData(this._uplistService.getDummyListData());
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