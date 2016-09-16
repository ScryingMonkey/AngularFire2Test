import { Component, OnInit, Input  } from '@angular/core';
import { UpLiComponent } from './upli.component';
import { UplistService } from './uplist.service';
import { ListData } from './listdata.interface';
import { ClickObject } from './clickobject.interface';

// import { PostService } from '../../services/post.service';
// import { Post } from '../../services/post';
import {Observable} from 'rxjs/observable';

@Component({
  moduleId: module.id,
  selector: 'up-list',
  templateUrl: 'uplist.component.html',
  styleUrls: ['uplist.component.css'],
  directives: [UpLiComponent]
})
export class UpListComponent {
  @Input() clickObject: ClickObject;
  private listData:ListData;
  public liClicked: boolean;

  constructor(private _uplistService: UplistService) {
    console.log('[ UpListComponent.constructor()');
    // Establish subscriptions
    this._uplistService.listData$.subscribe(
                                      (listData:ListData) => this.listData = listData,
                                      (error:any) => console.error(error)
                                      );
    console.log('...listData fetched from UpListService: ' + this.listData.listTitle);
  }
  onSelect() {
    console.log('[ UpListComponent.onSelect()');
    this.liClicked = !this.liClicked;
    console.log('...listData.listTitle: '); // + this.listData.listTitle);
  }
  onClicked(clickObject: ClickObject) {
    console.log("[ UpListComponent.onClicked()");
    this.liClicked = !this.liClicked;
    console.dir(this.clickObject);
    this._uplistService.setClickObject(clickObject);
    console.log("...updated UpListService.clickObject :" + clickObject);
  }
}

//ToDo: When one item is clicked on, all others close