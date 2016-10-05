import { Injectable } from '@angular/core';

@Injectable()
export class BuyService {

    constructor() { 
    }
    sendPayment(method:string) {
        console.log('[ BuyService.sendPayment()...');
        console.log('...sending payment with method: '+method);

    }
}