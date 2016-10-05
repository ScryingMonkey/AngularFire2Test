import { Component, OnInit } from '@angular/core';

import { BarrelOfMonkeysComponent } from '../barrelofmonkeys/barrelofmonkeys.component';
import { UpCheckoutForm } from '../upcheckoutform/upcheckoutform.component';
import { UpbuyContentPanelService } from './upbuycontentpanel.service'

@Component({
    moduleId: module.id,
    selector: 'upbuycontentpanelcomponent',
    templateUrl: 'upbuycontentpanel.component.html',
    directives: [BarrelOfMonkeysComponent, UpCheckoutForm],
    providers: [UpbuyContentPanelService]
})
export class UpbuyContentPanelComponent implements OnInit {
    private showBom: boolean;
    private showCheckoutForm: boolean;
    private testing: boolean;

    constructor( private _upBuyCPS:UpbuyContentPanelService) {
                console.log('[ BarrelOfMonkeysComponent.constructor...');
                this._upBuyCPS.checkoutTitle = "Thanks for donating!"
                this._upBuyCPS.showBom$.subscribe( res => this.showBom = res );
                this._upBuyCPS.showCheckoutForm$.subscribe( res => this.showCheckoutForm = res );
                // TODO: Remove testing code
                this.testing = false; 
     }

    ngOnInit() { }
    test() {
        console.log('[ UpbuyContentPanelComponent.switch...');
        this.showBom = !this.showBom;
        this.showCheckoutForm = !this.showCheckoutForm;
        console.log('...showBom: '+this.showBom );
        console.log('...showCheckoutForm: '+this.showCheckoutForm );
    }
}