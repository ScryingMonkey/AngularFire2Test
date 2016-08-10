import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';

@Component({
  moduleId: module.id,
  selector: 'up-li',
  template: `
  <div class="up-li"
  (click)="onSelect()"
  [class.clicked]="liClicked == true"
  >{{item.title}}
  </div>
  <div *ngIf="liClicked === true"
  class = "up-li-detail">
    <ul>
      <li *ngFor="let key of keys">
        {{key}} : {{item[key]}}
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['uplist.component.css'],
  inputs: ['item']
})
export class UpLiComponent implements OnInit {
  public item;
  public liClicked = false;
  keys = Array<string>();
  data = Array<string>();

  constructor(private _campaignService: CampaignService) {
  }
  ngOnInit() {
    this.keys = Object.keys(this.item);
    this.data = this.item;
    // console.log(this.keys);
  }

  onSelect() {
    this.liClicked = !this.liClicked;
    console.log('...in UpLiComponent.onSelect()');
  }
}
