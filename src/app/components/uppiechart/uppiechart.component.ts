import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass } from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts';
import {Observable} from 'rxjs/observable';

// import { UplistService } from '../uplist/uplist.service';
// import { ClickObject } from '../uplist/clickobject.interface';
import { UplistService } from '../uplist/uplist.service';
import { PieChartData } from './piechartdata.interface';
// webpack html imports
@Component({
  moduleId: module.id,
  selector: 'up-piechart',
  templateUrl: 'uppiechart.component.html',
  styleUrls: ['uppiechart.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
})
export class UpPieChartComponent implements OnInit {
  @Input() data: PieChartData = {
    labels: ['?', '?', '?'],
    values: [1, 1, 1],
    title: 'Loading...'
    };
  public pieChartType: string = 'pie';

  constructor(private _uplistService: UplistService) {}

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  getChartData() {
    //this._campaignService.getChartData().then((campaign: Campaign) => this.data = campaign);
    this._uplistService.pieChartData$.subscribe(data => {
                this.data = data
                console.log('...in UpPieChartComponent.getChartData() data:');
                console.dir(this.data);
              });
    
    // this.data = this._campaignService.getChartData();
  }
  ngOnInit():any {
    console.log("Logging in uppiechart");
    this.getChartData();
  }

}
