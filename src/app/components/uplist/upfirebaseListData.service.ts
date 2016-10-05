
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import {Observable} from 'rxjs/observable';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { ListData } from './listdata.interface'

@Injectable()
export class UpfirebaseListDataService {
  private listTitle:string = "Test Title from upfirebaseLDS";
  private afObject$: FirebaseObjectObservable<any>;
  private afItems$:FirebaseListObservable<any[]>;
  private listData:BehaviorSubject<ListData> = new BehaviorSubject(new ListData());

  constructor(private _af: AngularFire) {  }
  initializeListTitle(pathToData:string) {
      console.log('[ UpfirebaseListDataService.initializeListTitle...');
      this.afObject$ = this._af.database.object(pathToData);
      console.log('...subscribed to firebase object');
      this.afObject$.subscribe( res => {
                                this.listTitle = res.customerName;
                                console.log('...afObject: ');
                                console.dir(res);
                                        });
  }
  initializeListData(listTitle:string, liTitleKey:string, 
      liDetailKeys: Array<string>, pathToData:string ) {
      console.log('[ UpfirebaseListDataService.initializeListData...');
      let ld:ListData = new ListData();
      this.afItems$ = this._af.database.list(pathToData);
      console.log('...subscribed to firebase list');
      this.afItems$.subscribe(res => {  console.log('[ UpfirebaseListDataService.initialized.subscribe...');
                                        ld.listTitle = this.listTitle;
                                        ld.liTitleKey = liTitleKey;
                                        ld.liDetailKeys = liDetailKeys;
                                        ld.liItems = res;
                                        this.listData.next(ld);
                                        console.log('...updated listData');  
                                        console.dir(ld);                     
                                     } );
    //   let ld:ListData = { 'listTitle':listTitle, 'liTitleKey':liTitleKey, 
    //                         'liDetailKeys':liDetailKeys, 'liItems':liItems };
      console.log('...listData initialized');
  }
  // returns an object with the following keys: 
  // listTitle: string, liTitleKey: string, liDetailKeys: Array<string>, liItems: Array<Object>
  get listData$() { return this.listData.asObservable(); }
}