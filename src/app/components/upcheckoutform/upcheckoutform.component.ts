import {Component, OnInit, OnDestroy, APPLICATION_COMMON_PROVIDERS, Input } from '@angular/core';
import {CORE_DIRECTIVES, COMMON_DIRECTIVES, FORM_BINDINGS, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';

import { BuyService } from  '../../services/buy.service'
import { AuthService } from '../../services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'upcheckoutform',
  providers: [APPLICATION_COMMON_PROVIDERS, BuyService],
  templateUrl: 'upcheckoutform.component.html',
  styleUrls: ['upcheckoutform.component.css'],
  directives: [],
  pipes: []
})

export class UpCheckoutForm implements OnInit, OnDestroy  {
    public showTitle: boolean;
    public showAmount: boolean;
    public showForm: boolean;
    @Input() title:string;

    private donationAmount: number;
    private ccNumber: number;
    private ccExpiry: number;
    private ccCvc: number;

    constructor( private _buy:BuyService ) { 
        this.showTitle = true;
        this.showAmount = true;
        this.showForm = true;
        
        this.donationAmount = 5;
    }
    ngOnInit() { 
        console.log('[ UpCheckoutForm.ngOnInit...'); 
        this.showTitle = true;
        this.showAmount = true;
        this.showForm = true;
        
        this.donationAmount = 5;
    }
    ngOnDestroy() {
        console.log('[ UpCheckoutForm.ngOnDestroy...');
          }

    submitForm() { this.testForm(); }
    testForm() {
        console.log('[ UpCheckoutForm.testForm...');
        console.log('...ccData: '+this.getCCData() );
    }
    getCCData(){ return [this.ccNumber, this.ccExpiry, this.ccCvc]; }
}