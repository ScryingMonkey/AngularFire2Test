import { Component, OnInit, Input } from '@angular/core';

import { Monkey } from '../monkey.interface';
import { BarrelOfMonkeysService } from '../barrelofmonkeys.service';

@Component({
    moduleId: module.id,
    selector: 'monkey-skin',
    templateUrl: 'monkeyskin.component.html',
    providers: [] 
})
export class MonkeySkinComponent implements OnInit {
    @Input() monkey: Monkey;

    constructor(private _bomService: BarrelOfMonkeysService) { 
        console.log('[ MonkeySkinComponent.constructor...');
        console.log('...monkeysInTheBarrel: ');
        console.log(this._bomService.monkeysInTheBarrel);
    }

    ngOnInit() { 
        console.log('[ MonkeySkinComponent.ngOnInit...');
        console.log('...monkeysInTheBarrel: ');
        console.log(this._bomService.monkeysInTheBarrel);
    }

    monkeyClicked() {
        console.log('[ MonkeySkinComponent.monkeyClicked...');
        // queues up the next monkeys based on options selected
        let selectedMonkeys = [];  // need to initialize the array before assigning values or will convert to an array of char 
        selectedMonkeys.concat(this.monkey.responses); // the options that were selected from the form
        console.log('...selectedMonkeys :');
        console.log(selectedMonkeys);
        console.log(new Array(selectedMonkeys));
        
        
        console.log('...selectedMonkeys.length: '+selectedMonkeys.length);
        this._bomService.updateMonkeysInWaiting(selectedMonkeys);
        this._bomService.recordCurrentMonkeyAnswers(selectedMonkeys); // update currentMonkey with the responses to his options
        this._bomService.pullNextMonkey();
    }
    // TODO: For testing.  Remove when working.
    get testingMonkey() { return JSON.stringify(this.monkey); }
    
}