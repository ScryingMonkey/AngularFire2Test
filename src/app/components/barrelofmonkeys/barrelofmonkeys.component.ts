import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES }   from '@angular/forms';

import { Monkey } from './monkey.interface';
import { MonkeySkinComponent } from './monkeyskin/monkeyskin.component';
import { BarrelOfMonkeysService } from './barrelofmonkeys.service';

@Component({
    moduleId: module.id,
    selector: 'barrel-of-monkeys',
    templateUrl: 'barrelofmonkeys.component.html',
    providers: [BarrelOfMonkeysService],
    directives: [MonkeySkinComponent, FORM_DIRECTIVES]
})
export class BarrelOfMonkeysComponent implements OnInit {

    private monkey: Monkey;

    constructor(private _bomService: BarrelOfMonkeysService) {
        console.log('[ BarrelOfMonkeysComponent.constructor...');
        this._bomService.importBOM( this._bomService.getDummyBOM() );
        console.log('...updated bom in _bomService. monkeysInTheBarrel:');    
        console.log(this._bomService.monkeysInTheBarrel);
        this._bomService.currentMonkey$.subscribe( monkey => {
            console.log('[ BarrelOfMonkeysComponent.constructor.currentMonkey$.subscribe...');
            console.log('...monkeysInTheBarrel: ');
            console.log(this._bomService.monkeysInTheBarrel);
            this.monkey = monkey;
            console.log('...'+monkey.key+' is the current monkey!');
            console.log('...monkeysInTheBarrel: ');
            console.log(this._bomService.monkeysInTheBarrel);        
        } );             
     }

    ngOnInit() { 
        console.log('[ BarrelOfMonkeysComponent.ngOnInit()...');
        console.log('...monkeysInTheBarrel: ');
        console.log(this._bomService.monkeysInTheBarrel);
    }
}