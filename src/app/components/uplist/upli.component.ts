import { Component, OnInit, Input } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';

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
      <li *ngFor="let key of keysToDisplayInDetail">
        {{key}} : {{item[key]}}
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['uplist.component.css']
})
export class UpLiComponent implements OnInit {
  @Input() item; //json object
  @Input() liTitleKey: string;
  @Input() detailLabels: Array<string>; // Maybe should modify key names
  // the service and change this to a boolean (showDetailLabels)
  @Input() keysToDisplayInDetail: Array<string>;

  // @Input() set keystodisplay(keystodisplay: Array<string>) {
  //   this.keystodisplay = keystodisplay || Object.keys(this.item);
  // }
 //  @Input() set liTitleKey(liTitleKey: string) {
 //   this.liTitleKey = liTitleKey || 'No Title Provided';
 // }
  public liClicked = false;
  keys = Array<string>();
  data = Array<string>();

  constructor(private _campaignService: CampaignService) {
  }
  ngOnInit() {
    // if no keys to display are given, display all keys
    if (typeof this.keysToDisplayInDetail === 'undefined' ||
               this.keysToDisplayInDetail.length < 1) {
      this.keysToDisplayInDetail = Object.keys(this.item);
      }
    //ToDo: if detailLabels is null or empty, don't disply label or ':'

    // this.keystodisplay = (keystodisplay == null) ? Object.keys(this.item) : keystodisplay;
    // console.log(this.keys);
  }

  onSelect() {
    this.liClicked = !this.liClicked;
    console.log('...in UpLiComponent.onSelect()');
  }
}
