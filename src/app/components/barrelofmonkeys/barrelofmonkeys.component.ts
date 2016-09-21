import { Component, OnInit } from '@angular/core';

import { Monkey } from './monkey.interface';
import { MonkeySkinComponent } from './monkeyskin.component';
import { BarrelOfMonkeysService } from './barrelofmonkeys.service';

@Component({
    moduleId: module.id,
    selector: 'barrel-of-monkeys',
    templateUrl: 'barrelofmonkeys.component.html'
})
export class BarrelOfMonkeysComponent implements OnInit {
    constructor(private _bomService: BarrelOfMonkeysService) { }

    ngOnInit() { }
}