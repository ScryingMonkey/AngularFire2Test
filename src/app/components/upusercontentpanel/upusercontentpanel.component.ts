import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/observable';

import { UpListComponent } from '../uplist/uplist.component';
import { UplistService } from '../uplist/uplist.service';
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

  constructor(private _uplistService: UplistService, private _as: AuthService) {
    console.log('[ UpUserContentPanelComponent.constructor ]');
      // Establish subscriptions
    this._uplistService.listTitle$.subscribe(
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
    this._as.userListData$.subscribe( userListData => _uplistService.updateListData(userListData));
  }
  ngOnInit() {
    // pass observable to uplist child
    this.liItems = this._uplistService.liItems$;
    // Update UplistService.title

    // ToDo: Pull formatted user data from AuthService

    // ToDo: Update UplistService with user data 

    // Update data
    this._uplistService.updateTestData();
    // OR if passing the observable to the template and using the async pipe 
    //this.data = _testService.testData$;
    console.log('...UpContentPanelComponent.ngOnInit() fetched data, writing to console:');
    console.log('......listTitle : ' + this.listTitle);
    console.log('......liTitleKey : ' + this.liTitleKey);
    console.log('......liDetailKeys : ' + this.liDetailKeys);
    console.log('......liItems : ' + this.liItems);
    console.dir(this.liItems);
    console.log('...end writing data to console.')
  }
  authtester(){
    console.log('...UpContentPanelComponent.authtester()')
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