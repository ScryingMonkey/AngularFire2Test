import { Injectable } from '@angular/core';
import {Subscription} from 'rxjs/subscription';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";
import { Router }   from '@angular/router';

import { Monkey } from './monkey.interface';


@Injectable()
export class BarrelOfMonkeysService {
    private monkeysOutOfTheBarrel:Array<Monkey> = new Array();
	private monkeysInTheBarrel:Array<Monkey> = new Array();
	// private questionMap = [key {followups}]
	private currentMonkey = BehaviorSubject<Monkey> = new BehaviorSubject(this.getDummyMonkey());
	private monkeysInWaiting = BehaviorSubject<Array<Monkey>> = new BehaviorSubject(new Array());

    constructor() { }
    updateCurrentMonkey(monkey:Monkey) {
        console.log('[ BarrelOfMonkeysService.updateCurrentMonkey()');        
        this.currentMonkey.next(monkey);
    }
    updateMonkeysInWaiting(monkeyKeys:Array<keys>) {        
        console.log('[ BarrelOfMonkeysService.updateMonkeysInWaiting()');
        let patientMonkeys:Array<Monkey> = new Array();
        for(let key of monkeyKeys) {
            patientMonkeys.push(this.findMonkey(key,this.monkeysInTheBarrel));
            }
        this.monkeysInWaiting.next(this.monkeysInWaiting.concat(patientMonkeys));
        console.log('...monkeysInWaiting updated');
        return true;
    }
    importBOM(roster) {  // what is roster?  JSON? path to txt file? 
        // This doesn't do much currently.  
        // TODO: Create monkeys and bom from a config file.  
        console.log('[ BarrelOfMonkeysService.createMonkeys()');
        roster = this.getDummyBOM();
        for (let monkey in roster) {
            let anotherMonkey: Monkey = monkey;
            this.monkeysInTheBarrel.push(anotherMonkey);
        }
     }
     findMonkey(key:string, barrel:Array(Monkey)) {
        console.log('[ BarrelOfMonkeysService.findMonkey');                  
        for (let monkey in barrel) {
             if (monkey.key === key) {
                 console.log('...found a monkey with key: '+key);
                 console.log(monkey);
                 return monkey;
             }
         }
         console.log('...found no monkeys!');
     }
    // Getters
    get currentMonkey$() { return this.currentMonkey.asObservable();}
    getDummyBOM() {
        console.log('[ BarrelOfMonkeysService.getDummyBOM');                          
        let bom: Array<Monkey> = new Array();
        let monkey:Monkey = this.getDummyMonkey();
        let keys = ['Bob', 'Joey', 'Bobo', 'Heavy', 'Moses'];
        let hats = ['purple witch hat', 'orange sombrero', 'black top hat', 'beanie', 'beer hat'];
        
        let key = '';
        let blurb1 = 'I am ';
        let blurb2 = '!  I am wearing a ';
        let blurb3 = '!  Who would you like to see next?';
        let optionType = 'checkbox';
        let options = [];
        let followups = [];
        let hat = '';

        for (let n=0; n < keys.length; n++) {
            let monkey: Monkey = {
                key: string = keys[n]; // How the monkey is summoned from the barrel
                blurb: string = blurb1 + keys[n] + blurb2 + hats[n] + blurb3; // What the monkey says.  Ususally a 1-2 sentence solicitation.
                optionType: string = optionType, // What kind of responses the monkey offers
                options: [string] = options; // The responses the monkey offers
                followups: [string] = followups; // The monkey or monkies that comes after this monkey.  If null, you are done!
                hat: string = hats[n]; // A general description of the monkey's head covering (all monkeys wear hats).
            };
            bom.push(monkey);
        }      
        console.log('...created a bom!  bom:');
        console.log(bom);
        return bom; // barrel of monkeys
    }
    getDummyMonkey() {
        return new Monkey({
            key: string = 'dummy'; // How the monkey is summoned from the barrel
            blurb: string = 'How many uncles does a dummyMonkey have?'; // What the monkey says.  Ususally a 1-2 sentence solicitation.
            optionType: string = 'checkbox', // What kind of responses the monkey offers
            options: [string] = ['1', '2', '3']; // The responses the monkey offers
            followups: [string] = []; // The monkey or monkies that comes after this monkey.  If null, you are done!
            submit: string = 'Next';
            hat: string = 'yellow dunce cap'; // A general description of the monkey's head covering (all monkeys wear hats).
        });
    }
}