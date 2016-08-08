import { Injectable } from '@angular/core';
import { CAMPAIGN_DATA } from './mock-campaign';
import { Campaign } from './campaign';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CampaignService {
  //data to chart coming into component
  public data: Campaign = {
    labels: ['Total Sent', 'Open Rate', 'Click Through Rate'],
    values: [500, 400, 100],
    campaignName: 'Test Campaign Title from service',
    totalSent: 1000,
    openRate: 400,
    clickThrough: 100
  };

  getChartData() {
    return Promise.resolve(this.data);
    // return this.data;
  }

  setData(data){
    console.log("...in CampaignService.setData()")
    console.log("campaignName from data: "+data.campaignName);
    this.data.campaignName = data.campaignName;
    this.data.totalSent = data.totalSent;
    this.data.openRate = data.openRate;
    this.data.clickThrough = data.clickThrough;
    this.data.values = [data.totalSent, data.openRate, data.clickThrough,
                        data.openRate, data.clickThrough];
  }


}
