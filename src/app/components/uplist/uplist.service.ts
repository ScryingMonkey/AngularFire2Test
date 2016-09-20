import { Injectable, Input } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";

import { ClickObject } from './clickobject.interface';
import { PieChartData } from '../uppiechart/piechartdata.interface';
import { ListData } from './listdata.interface'

@Injectable()
export class UplistService {
  // Observable sources 
  private listTitle: BehaviorSubject<string> = new BehaviorSubject('Default listTitle');
  private liTitleKey: BehaviorSubject<string> = new BehaviorSubject('Default liTitleKey');
  private liDetailKeys: BehaviorSubject<Array<string>> = new BehaviorSubject(Array());
  private liItems: BehaviorSubject<Array<Object>> = new BehaviorSubject(Array([]));

  private clickObject: ClickObject;
  private listData: BehaviorSubject<ListData> = new BehaviorSubject(this.getDummyListData());
  private pieChartData: BehaviorSubject<PieChartData> = new BehaviorSubject({
                          labels: ['?', '?', '?'], values: [1, 1, 1], title: 'Loading...' });
  
  constructor() {
    console.log('[ UplistService.constructor');
  }

  // requires an object with the following keys:
  //   listTitle: string, listTitleKey: string, liDetailKeys: Array<string>, liItems: Object
  updateListData(data: ListData) {
    console.log('[ UplistService.updateListData()');
    this.listData.next(data) ;
    // this.listTitle.next( data.listTitle );
    // this.liTitleKey.next( data.liTitleKey );
    // this.liDetailKeys.next( data.liDetailKeys );
    // this.liItems.next( data.liItems );
    console.log('...data updated:');
    console.dir(data);
  }
  updatePieChartData(data: PieChartData) { 
    this.pieChartData.next(data); 
  }
  convertClickObjectToPieChart(co: ClickObject) {
    let temp: PieChartData = {title: 'temp',
                              labels: [],
                              values: [] };
    temp.title = co.title;
    Object.keys(co.values).forEach(function (key) {
                          temp.labels.push(key);
                          temp.values.push(co.values[key]);
                              });
    console.log('...clickObject converted :');
    console.dir(temp);
    return temp;
  }
  // Setters
  setClickObject(clickObject: ClickObject){
    console.log('[ UplistService.setclickObject()');
    this.clickObject = clickObject;
    console.log('...clickObject set to: ');
    console.dir(this.clickObject);
    this.updatePieChartData(this.convertClickObjectToPieChart(clickObject));
  }
  // Getters
  get listTitle$() { return this.listTitle.asObservable(); }
  get liTitleKey$() { return this.liTitleKey.asObservable(); }
  get liDetailKeys$() { return this.liDetailKeys.asObservable(); }
  get liItems$() { return this.liItems.asObservable(); }

  get listData$() { return this.listData.asObservable(); }
  getClickObject() { return this.clickObject; }
  get pieChartData$() { return this.pieChartData.asObservable(); }
  getDummyListData() {
    console.log('[ UplistService.updateTestData()');
    let data: ListData = {
      'listTitle': 'Dummy Title From UplistService',
      'liTitleKey': 'liTitle',
      'liDetailKeys': ['detail1', 'detail2', 'detail3'],
      'liItems': [
          {'liTitle': 'liTitle1' , 'detail1':3, 
          'detail2':4, 'detail3':5},
          {'liTitle': 'liTitle2' , 'detail1':345, 
          'detail2':135, 'detail3':34},
          {'liTitle': 'liTitle3' , 'detail1':10485, 
          'detail2':3409, 'detail3':245}
        ]
    }
    console.log('...updating data:')
    return data;
  }
  //Testers
  testListData(data:ListData) {
    console.log('[ UplistService.testListData()');
    console.log('...fetched data, writing to console:');
    console.log('......listTitle : ' + data.listTitle);
    console.log('......liTitleKey : ' + data.liTitleKey);
    console.log('......liDetailKeys : ' + data.liDetailKeys);
    console.log('......liItems : ');
    console.dir(data.liItems);
    console.log('...end writing data to console.')
  }
}