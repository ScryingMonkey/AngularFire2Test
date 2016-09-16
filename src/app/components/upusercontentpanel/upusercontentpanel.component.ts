import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/observable';

import { UpListComponent } from '../uplist/uplist.component';
import { UplistService } from '../uplist/uplist.service';
import { ListData } from '../uplist/listdata.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'upusercontent-panel',
  templateUrl: 'upusercontentpanel.component.html',
  directives: [UpListComponent],
  styleUrls: ['upusercontentpanel.component.css'],
  providers: [ UplistService ]
})
export class UpUserContentPanelComponent implements OnInit {
  private listTitle: string;
  private liTitleKey: string;
  private liDetailKeys: string[];
  private liItems: Observable<Object[]>;
  private listData: ListData;

  constructor(private _uplistService: UplistService, private _as: AuthService) {
    console.log('[ UpUserContentPanelComponent.constructor');
      // Establish subscriptions
    this._uplistService.listTitle$.subscribe(
                      (listTitle:string) => this.listTitle = listTitle,
                      (error:any) => console.error(error)
                      );
    this._uplistService.liDetailKeys$.subscribe(
                      (data) => this.liDetailKeys = data,
                      (error:any) => console.error(error)
                      );
    // Bind AuthService.userListData$ to UplistService.listData
    this._as.userListData$.subscribe( userListData => _uplistService.updateListData(userListData));
  }
  ngOnInit() {
    // pass observable to uplist child
    // this.liItems = this._uplistService.liItems$;
    // Update UplistService.title

    // Update data
    // this._uplistService.updateListData();
    // OR if passing the observable to the template and using the async pipe 
    //this.data = _testService.testData$;
    // console.log('[ UpUserContentPanelComponent.ngOnInit()');
    // this._uplistService.testListData(this.listData);

  }
  authtester(){
    console.log('[ UpUserContentPanelComponent.authtester()')
    this._as.loginTester();
  }
  // ToDo:
// pull user data from AuthService
// Update UpListComponent
// push user data to uplist
// Dispaly user data in a UpListComponent
// List data user has access to 
// Restrict access based on logged in user 
// Celebrate!
}