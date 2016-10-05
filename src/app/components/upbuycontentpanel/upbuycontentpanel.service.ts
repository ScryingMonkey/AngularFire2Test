import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { Observable } from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";




@Injectable()
export class UpbuyContentPanelService {
    public checkoutTitle:string;
    private showBom: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private showCheckoutForm: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() { }

    // Getters
    get showBom$() { return this.showBom.asObservable(); }
    get showCheckoutForm$() { return this.showCheckoutForm.asObservable(); }
    // Setters
    public updateShowBom$(state:boolean) { 
        this.showBom.next(state); 
        console.log('...showBom :'+this.showBom.value);
    }
    public updateShowCheckoutForm$(state:boolean) { 
        this.showCheckoutForm.next(state); 
        console.log('...showCheckoutForm :'+this.showCheckoutForm.value);
    }
}