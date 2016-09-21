import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/observable';

import { UpUserListComponent } from '../uplist.1d/uplist.1d.component';
import { UpUserListService } from '../uplist.1d/uplist.1d.service';
import { UserListData } from '../uplist.1d/listdata.1d.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'upusercontent-panel',
  templateUrl: 'upusercontentpanel.component.html',
  directives: [UpUserListComponent],
  styleUrls: ['upusercontentpanel.component.css'],
  providers: [ UpUserListService ]
})
export class UpUserContentPanelComponent implements OnInit {
  private listTitle: string;
  private liTitleKey: string;
  private liDetailKeys: string[];
  private liItems: Observable<Object[]>;
  private listData: UserListData;

  constructor(private _upUserListService: UpUserListService, private _as: AuthService) {
    console.log('[ UpUserContentPanelComponent.constructor');
    // Establish subscriptions
    // Bind AuthService.userListData$ to Uplist1dService.listData    
    this._as.user$.subscribe( user => {
                console.log('...change detected in _as.user$ :');
                console.log(user);
                console.log('...updating _as.updateUserData(user)');
                this._as.updateUserData(user)
                // this._uplistService1d.updateListData(userListData);
                // this._uplistService1d.testListData(userListData););
    });
    // Bind AuthService.userListData$ to Uplist1dService.listData
    this._as.userListData$.subscribe( userListData => {
                console.log('...change detected in _as.userListData$ :');
                console.log(userListData);
                console.log('...sending to _uplistService.updateListData(userListData)');
                this._upUserListService.testListData(userListData);
                this._upUserListService.updateListData(userListData);
                this._upUserListService.testListData(userListData);
    });
  }
  ngOnInit() {
    
  }
  authtester(){
    console.log('[ UpUserContentPanelComponent.authtester()')
    // this._as.update();
    this._as.loginTester();
  }
  // ToDo:
// Clone and reconfigure UpList to display a single obect of data
// Dispaly user data in a UpListComponent
// List data user has access to 
// Restrict access based on logged in user 
// Celebrate!
}