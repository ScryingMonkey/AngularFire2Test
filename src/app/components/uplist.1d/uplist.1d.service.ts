import { Injectable, Input } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";

import { UserListData } from './listdata.1d.interface'
import { ClickObject1D } from './clickobject.1d.interface';


@Injectable()
export class UpUserListService {
  private userListData: BehaviorSubject<UserListData> = new BehaviorSubject(this.getDummyListData());
  private clickObject1d: ClickObject1D;
  
  constructor() {
    console.log('[ UpUserListService.constructor');
    
  }

  // requires an object with the following keys:
  //       listTitle: string,
  //       liDetailKeys: Array<string>, 
  //       liItems: Object
  updateListData(data: UserListData) {
    console.log('[ UpUserListService.updateListData()');
    this.userListData.next(data) ;
    console.log('...data updated:');
    console.dir(data);
  }
  // Setters
  setClickObject1d(clickObject1d: ClickObject1D){
    console.log('[ UpUserListService.setclickObject()');
    this.clickObject1d = clickObject1d;
    console.log('...clickObject set to: ');
    console.dir(this.clickObject1d);
  }
  // Getters
  get userListData$() { return this.userListData.asObservable(); }
  getClickObject() { return this.clickObject1d; }
  getDummyListData() {
    console.log('[ UpUserListService.getDummyListData()');
    let data: UserListData = {
      listTitle: "Dummy List Title",
      userPictureURL: "http://png.clipart.me/graphics/thumbs/103/crash-test-dummy_103003187.jpg",
      liKeysToDisplay: ['dummyKey1', 'dummyKey2', 'dummyKey3'],
      liItems: { dummyKey1:'dummyData1 ', dummyKey2:'dummyData2', dummyKey3:'dummyData3', dummyKey4:'dummyData4'}
    }
    console.log('...returning data:')
    return data;
  }
  //Testers
  testListData(data : UserListData) {
    console.log('[ UpUserListService.testListData()');
    console.dir(data);
  }
}