import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { UplistService } from './uplist.service';

import { ClickObject } from './clickobject.interface';

@Component({
  moduleId: module.id,
  selector: 'up-li',
  template: `
  <div class="up-li"
  (click)="onSelect()"
  [class.clicked]="liClicked == true"
  >{{item[liTitleKey]}}
  </div>
  <div *ngIf="liClicked === true"
  class = "up-li-detail">
    <ul>
      <li *ngFor="let key of liDetailKeys">
        {{key}} : {{item[key]}}
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['uplist.component.css']
})
export class UpLiComponent implements OnInit {
  @Input() liTitleKey: string;
  @Input() liDetailKeys: Array<string>;
  @Input() item; //json object
  // @Input() detailLabels: Array<string>; // Maybe should modify key names
  // // the service and change this to a boolean (showDetailLabels)
  public liClicked = false;
  private clickObject: ClickObject = {title:'Default Title', values:{}};
  @Output() clickEmitter = new EventEmitter<Object>();

  constructor(private _uplistService: UplistService) {
    console.log('[ UpLiComponent.constructor');
    console.log('...item : ' + this.item);
  }
  ngOnInit() {
    // if no keys to display are given, display all keys
    if (typeof this.liDetailKeys === 'undefined' ||
               this.liDetailKeys.length < 1) {
      this.liDetailKeys = Object.keys(this.item);
      }
    //ToDo: if detailLabels is null or empty, don't disply label or ':'


  }

  onSelect() {
    console.log('[ UpLiComponent.onSelect()');
    if(!this.liClicked) {
      // this.clickObject.title = 'Default Title';
      this.clickObject.title = this.item[this.liTitleKey];
      for (let key of this.liDetailKeys){
        this.clickObject.values[key] = this.item[key];
      }
      this.clickEmitter.emit(this.clickObject);
      console.log('...clickObject: ');
      console.dir(this.clickObject);
    }else{
      console.log('...unclicking')
    }
    this.liClicked = !this.liClicked;    
  }

  test(method: string){
    console.log('[ UpLiComponent.'+method+'');
    console.log('...writing values to console :');
    console.log('@Input() liTitleKey: ' + this.liTitleKey);
    console.log('@Input() liDetailKeys: ' + this.liDetailKeys);
    console.log('@Input() item: ' + this.item);
    console.dir(this.item);
    console.log('...finished writing to console.');
  }
}
