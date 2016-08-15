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
  // private stListLiTitleKey: string;
  // private testListKeys: Array<string>;

  constructor(private _uplistService: UplistService) {
  console.log('...in UpContentPanelComponent.constructor');
  }
  ngOnInit() {
    // Establish subcriptons
    this._uplistService.testListTitle$.subscribe(
                      (listTitle:string) => this.listTitle = listTitle,
                      (error:any) => console.error(error)
                      );
    this._uplistService.liTitleKey$.subscribe(
                      (data) => this.liTitleKey = data,
                      (error:any) => console.error(error)
                      );
    this._uplistService.liDetailKeys$.subscribe(
                      (data) => this.liDetailKeys = data,
                      (error:any) => console.error(error)
                      );
    // pass observable to uplist child
    this.liItems = this._uplistService.liItems$;
    // pass observable to uppiechart child
    this.pieChartData = this._uplistService.pieChartData$;
    // Update data
    this._uplistService.updateTestData();
    // OR if passing the observable to the template and using the async pipe 
    //this.data = _testService.testData$;
    console.log('...in UpContentPanelComponent.ngOnInit() ...fetched data, writing to console:');
    console.log('listTitle : ' + this.listTitle);
    console.log('liTitleKey : ' + this.liTitleKey);
    console.log('liDetailKeys : ' + this.liDetailKeys);
    console.log('liItems : ' + this.liItems);
    console.dir(this.liItems);
    console.log('...end writing data to console.')

    // this.listTitle = this.data.listTitle;
    // this.testListLiTitleKey = this.data.liTitleKey;
    // this.testListKeys = this.data.detaiKeys;
    // this.testListItems = this.data.items;
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