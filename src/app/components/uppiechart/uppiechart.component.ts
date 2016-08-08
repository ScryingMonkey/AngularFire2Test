import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass } from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts';
import { Campaign } from '../../services/campaign';
import { CampaignService } from '../../services/campaign.service'

// webpack html imports
@Component({
  moduleId: module.id,
  selector: 'up-piechart',
  templateUrl: 'uppiechart.component.html',
  styleUrls: ['uppiechart.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [ CampaignService ]
})
export class UpPieChartComponent implements OnInit {
  private data = {
    labels: ['?', '?', '?'],
    values: [1, 1, 1],
    campaignName: 'Loading...'
    };
  public pieChartType: string = 'pie';

  constructor(private _campaignService: CampaignService) {}

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  getChartData() {
    this._campaignService.getChartData().then((campaign: Campaign) => this.data = campaign);
    // this.data = this._campaignService.getChartData();
  }
  ngOnInit():any {
    console.log("Logging in uppiechart");
    this.getChartData();
  }

}
