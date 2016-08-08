import { Component } from '@angular/core';
import { CampaignService } from '../../services/campaign.service'

@Component({
  moduleId: module.id,
  selector: 'upfirebaselist-li',
  template: `
  <div class="uplist-li"
  (click)="onSelect()"
  [class.clicked]="liClicked == true"
  >{{ item.campaignTitle }}
  </div>
  <div *ngIf="liClicked === true"
  class = "uplist-li-detail">
  {{ labels[0] }} : {{ item.totalSent }}<br>
  {{ labels[1] }} : {{ item.openRate }}<br>
  {{ labels[2] }} : {{ item.clickThrough }}<br>
  </div>
  `,
  styleUrls: ['upfirebaselist.component.css'],
  inputs: ['item'],
  providers: [ CampaignService ]
})
export class UpFirebaseListLi {
  public item;
  public text = "Testing...";
  public liClicked = false;
  private labels = ['Total emails sent',
                    'Total emails opened',
                    'Total click throughs'];
  private itemData = {campaignName: "",
                    totalSent: "",
                    openRate: "",
                    clickThrough: "" };

constructor(private _campaignService: CampaignService){

}

  onSelect() {
    this.liClicked = !this.liClicked;
    console.log("...in UpListLi.onSelect()");
    this.itemData = {campaignName: this.item.campaignTitle,
                      totalSent: this.item.totalSent,
                      openRate: this.item.openRate,
                      clickThrough: this.item.clickThrough
                    };
    this._campaignService.setData(this.item);
  }
}
