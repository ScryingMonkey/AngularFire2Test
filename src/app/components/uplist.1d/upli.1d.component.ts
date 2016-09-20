import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';

import { UpUserListService } from './uplist.1d.service';
import { ClickObject1D } from './clickobject.1d.interface';

@Component({
  moduleId: module.id,
  selector: 'up-li-1d',
  template: `
  <div class="up-li" [class.clicked]="liClicked == true">
    {{ key }} :  {{ value }}
  </div>
  `,
  styleUrls: ['uplist.1d.component.css']
})
export class UpUserLiComponent implements OnInit {
  @Input() item: Object;
  @Output() clickEmitter = new EventEmitter<Object>();
  private key: string = "";
  private value: string = "";
  private isPicture: boolean = false;
  public liClicked = false;
  private clickObject: ClickObject1D = {title:'Default Title', values:{}};

  constructor(private _uplistService1D: UpUserListService) {
    console.log('[ UpUserLiComponent.constructor()');
  }
  ngOnInit() {
    console.log('[ UpUserLiComponent.ngOnInit()');    
    this.key = Object.keys(this.item)[0];
    this.value = this.item[this.key];
    if(this.key === 'photoURL') { this.isPicture = true; }
    console.log('...key : '+this.key+', value: '+this.value+', isPicture: '+this.isPicture);
  }

  // onSelect() {
  //   console.log('[ UpUserLiComponent.onSelect()');
  //   if(!this.liClicked) {
  //     this.clickObject.title = this.item[this.liTitleKey];
  //     for (let key of this.liDetailKeys){
  //       this.clickObject.values[key] = this.item[key];
  //     }
  //     this.clickEmitter.emit(this.clickObject);
  //     console.log('...clickObject: ');
  //     console.dir(this.clickObject);
  //   }else{
  //     console.log('...unclicking')
  //   }
  //   this.liClicked = !this.liClicked;    
  // }
}
