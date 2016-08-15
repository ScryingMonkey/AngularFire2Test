import { Component, OnInit, Input  } from '@angular/core';
import { UpLiComponent } from './upli.component';
import { UplistService } from './uplist.service';
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
export class UpListComponent implements OnInit {
  public liClicked: boolean;
  @Input() title: string;
  @Input() liTitleKey: string;
  @Input() liDetailKeys: string[];
  @Input() items: Observable<any[]>;
  @Input() clickObject: ClickObject;

  onSelect() {
    this.liClicked = !this.liClicked;
    console.log('...in UpListComponent.onSelect(), title: ' + this.title);
  }

  constructor(private _uplistService: UplistService) {
    console.log('...in UpListComponent.constructor, title: ' + this.title);
  }
  ngOnInit() {
    console.log('...in UpListComponent.ngOnInit()');
    //this.test('ngOnInit');
    this.items.subscribe(res => console.dir(res)); 
    // this._testService.updateTestData();
    }
  onClicked(clickObject: ClickObject) {
    this.liClicked = !this.liClicked;
    this.clickObject = clickObject;
    console.log("... in UpListComponent.onClicked() clickObject :" + this.clickObject);
    console.dir(this.clickObject);
    this._uplistService.setClickObject(this.clickObject);
  }
  test(method: string){
    console.log('...in UpListComponent.'+method+', writing values to console :');
    console.log('@Input() liTitleKey: ' + this.liTitleKey);
    console.log('@Input() liDetailKeys: ' + this.liDetailKeys);
    console.log('@Input() item: ' + this.items);
    console.dir(this.items);
    console.log('...finished writing to console.');
  }
}

//ToDo: When one item is clicked on, all others close