import { Injectable, Input } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";

import { ClickObject } from './clickobject.interface';
import { PieChartData } from '../uppiechart/piechartdata.interface';

@Injectable()
export class UplistService {
  // Observable sources
  private listTitle: BehaviorSubject<string> = new BehaviorSubject('Default listTitle');
  private liTitleKey: BehaviorSubject<string> = new BehaviorSubject('Default liTitleKey');
  private liDetailKeys: BehaviorSubject<Array<string>> = new BehaviorSubject(Array());
  private liItems: BehaviorSubject<Array<Object>> = new BehaviorSubject(Array([]));
  private clickObject: ClickObject;
  private pieChartData: BehaviorSubject<PieChartData> = new BehaviorSubject({
                                                                labels: ['?', '?', '?'],
                                                                values: [1, 1, 1],
                                                                title: 'Loading...'
                                                                });
  // Observable string streams
  // _liData$ = this.liData.asObservable();
  // _listTitle$ = this.listTitle.asObservable();

  constructor() {
    console.log('...in TestService.constructor');
  }

  get testListTitle$() {
    // this.updateTestData();
    return this.listTitle.asObservable();
  }
  get liTitleKey$() {
    // this.updateTestData();
    return this.liTitleKey.asObservable();
  }
  get liDetailKeys$() {
    // this.updateTestData();
    return this.liDetailKeys.asObservable();
  }
  get liItems$() {
    // this.updateTestData();
    return this.liItems.asObservable();
  }
  getClickObject() {
    return this.clickObject;
  }
  setClickObject(clickObject: ClickObject){
    this.clickObject = clickObject;
    console.log('...in UplistService.setclickObject() clickObject set to: ');
    console.dir(this.clickObject);
    this.updatePieChartData(this.convertClickObjectToPieChart(clickObject));
  }
  get pieChartData$() {
    return this.pieChartData.asObservable();
  }
  updatePieChartData(data: PieChartData) {

    this.pieChartData.next(data);
  }
  updateTestData() {
    this.listTitle.next('Title From TestService');
    this.liTitleKey.next('liTitle');
    this.liDetailKeys.next(['detail1', 'detail2', 'detail3']);
    this.liItems.next([
          {'liTitle': 'liTitle1' , 'detail1':3, 
          'detail2':4, 'detail3':5},
          {'liTitle': 'liTitle2' , 'detail1':345, 
          'detail2':135, 'detail3':34},
          {'liTitle': 'liTitle3' , 'detail1':10485, 
          'detail2':3409, 'detail3':245}
        ] );
    console.log('...in TestService.updateTest.Data, data updated')
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
    console.log('clickObject converted :');
    console.dir(temp);
    return temp;
  }
}