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
	private currentMonkey : BehaviorSubject<Monkey> = new BehaviorSubject(this.getDummyMonkey());
	private monkeysInWaiting : BehaviorSubject<Array<Monkey>> = new BehaviorSubject(new Array());

    constructor() { }
    updateCurrentMonkey(monkey:Monkey) {
        console.log('[ BarrelOfMonkeysService.updateCurrentMonkey()');        
        this.currentMonkey.next(monkey);
    }
    updateMonkeysInWaiting(monkeyKeys:Array<string>) {        
        console.log('[ BarrelOfMonkeysService.updateMonkeysInWaiting()');
        let patientMonkeys:Array<Monkey> = new Array();
        for(let key of monkeyKeys) {
            patientMonkeys.push(this.findMonkey(key, this.monkeysInTheBarrel));
            }
        this.monkeysInWaiting.next(this.monkeysInWaiting.value.concat(patientMonkeys));
        console.log('...monkeysInWaiting updated');
        return true;
    }
    importBOM(roster) {  // what is roster?  JSON? path to txt file? 
        // This doesn't do much currently.  
        // TODO: Create monkeys and bom from a config file.  
        console.log('[ BarrelOfMonkeysService.createMonkeys()');
        roster = this.getDummyBOM();
        for (let monkey of roster) {
            let anotherMonkey: Monkey = monkey;
            this.monkeysInTheBarrel.push(anotherMonkey);
        }
     }
     findMonkey(key:string, barrel:Array<Monkey>) {
        console.log('[ BarrelOfMonkeysService.findMonkey');                  
        for (let monkey of barrel) {
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
        let options:Array<string> = [];
        let followups:Array<string> = [];
        let hat = '';

        for (let n=0; n < keys.length; n++) {
            let monkey: Monkey = {
                key: keys[n], // How the monkey is summoned from the barrel
                blurb: blurb1 + keys[n] + blurb2 + hats[n] + blurb3, // What the monkey says.  Ususally a 1-2 sentence solicitation.
                optionType: optionType, // What kind of responses the monkey offers
                options: options, // The responses the monkey offers
                followups: followups, // The monkey or monkeys that comes after this monkey.  If null, you are done!
                submit: 'Next',  // label of the submit button
                hat: hats[n] // A general description of the monkey's head covering (all monkeys wear hats).
            };
            bom.push(monkey);
        }      
        console.log('...created a bom!  bom:');
        console.log(bom);
        return bom; // barrel of monkeys
    }
    getDummyMonkey() {
        return <Monkey> {
            key: 'dummy', // :string  How the monkey is summoned from the barrel
            blurb: 'How many uncles does a dummyMonkey have?', // :string  What the monkey says.  Ususally a 1-2 sentence solicitation.
            optionType: 'checkbox', // :string  What kind of responses the monkey offers
            options: ['1', '2', '3'], // :String[]  The responses the monkey offers
            followups: [], // :String[]  The keys of the monkey or monkeys that comes after this monkey.  If null, you are done!
            submit: 'Next', // :string  Label of submit button
            hat:  'yellow dunce cap' // :string  A general description of the monkey's head covering (all monkeys wear hats).
        };
    }
}