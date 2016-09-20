import { Component, OnInit, Input  } from '@angular/core';
import {Observable} from 'rxjs/observable';

import { UpUserLiComponent } from './upli.1d.component';
import { UpUserListService } from './uplist.1d.service';
import { UserListData } from './listdata.1d.interface';
import { ClickObject1D } from './clickobject.1d.interface';

@Component({
  moduleId: module.id,
  selector: 'up-list-1d',
  templateUrl: 'uplist.1d.component.html',
  styleUrls: ['uplist.1d.component.css'],
  directives: [ UpUserLiComponent ]
})
export class UpUserListComponent {
  @Input() clickObject1d: ClickObject1D;
  private userListData: UserListData;
  public liClicked: boolean;

  constructor(private _upUserListService: UpUserListService) {
    console.log('[ UpUserListComponent.constructor()');
    // Establish subscriptions
    this.userListData = _upUserListService.getDummyListData();
    console.log('...userListData intialized with dummy data');
    this._upUserListService.userListData$.subscribe(
                                      (userListData:UserListData) => this.userListData = userListData,
                                      (error:any) => console.error(error)
                                      );
    console.log('...userListData fetched from UpUserListService: ');
    console.dir(this.userListData);
    console.log('...userListData.liItems fetched from UpUserListService: ');
    console.dir(this.userListData.liItems);
  }
  onSelect() {
    console.log('[ UpUserListComponent.onSelect()');
    this.liClicked = !this.liClicked;
  }
  onClicked(clickObject1d: ClickObject1D) {
    console.log("[ UpUserListComponent.onClicked()");
    this.liClicked = !this.liClicked;
    console.dir(this.clickObject1d);
    this._upUserListService.setClickObject1d(clickObject1d);
    console.log("...updated clickObject1d :" + clickObject1d);
  }
}