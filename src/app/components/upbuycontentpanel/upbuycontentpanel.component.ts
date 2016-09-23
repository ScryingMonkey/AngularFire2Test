import { Component, OnInit } from '@angular/core';

import { BarrelOfMonkeysComponent } from '../barrelofmonkeys/barrelofmonkeys.component';

@Component({
    moduleId: module.id,
    selector: 'upbuycontentpanelcomponent',
    templateUrl: 'upbuycontentpanel.component.html',
    directives: [BarrelOfMonkeysComponent],
    providers: []
})
export class UpBuyContentPanelComponent implements OnInit {
    constructor() {
                console.log('[ BarrelOfMonkeysComponent.constructor...');
     }

    ngOnInit() { }
}