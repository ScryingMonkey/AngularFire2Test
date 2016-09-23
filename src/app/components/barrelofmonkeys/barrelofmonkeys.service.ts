import { Injectable } from '@angular/core';
import {Subscription} from 'rxjs/subscription';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";
import { Router }   from '@angular/router';

import { Monkey } from './monkey.interface';


@Injectable()
export class BarrelOfMonkeysService {
    private monkeysOutOfTheBarrel: Array<Monkey> = new Array();
	public monkeysInTheBarrel: Array<Monkey> = new Array();
    private monkeysInWaiting: Array<Monkey> = new Array();
	// Observable that is passed to components.  Shared as an observable.
	private currentMonkey : BehaviorSubject<Monkey> = new BehaviorSubject(this.getDummyMonkey());
	

    constructor() { }
    pullNextMonkey() {
        console.log('[ BarrelOfMonkeysService.pullNextMonkey()'); 
        // pulls the first monkey-In-Waiting and sends to updateCurrentMonkey()
        // if monkeysInWaiting is empty, trigger roll up
        if(this.monkeysInWaiting.length > 0) {
            this.outOfMonkeys();
        } else {
            this.updateCurrentMonkey(this.monkeysInWaiting.shift());
        }
    }
    updateCurrentMonkey(monkey:Monkey) {
        // if there is a currentMonkey, adds currentMonkey to monkeysOutOfTheBarrel
        // makes input the currentMonkey
        console.log('[ BarrelOfMonkeysService.updateCurrentMonkey()');
        if (this.currentMonkey.value) {
            this.monkeysOutOfTheBarrel.push(this.currentMonkey.value);    
            monkey.leader = this.currentMonkey.value.key;  // tracked to facilitate a back button
            console.log('...'+this.currentMonkey.value+' is out of the barrel');           
            this.currentMonkey.next(monkey);
            console.log('...'+monkey.key+' is the next monkey');
        } else {
            console.log('...this is the first monkey! : '+monkey.key);
        }
    }
    updateMonkeysInWaiting(followers:Array<string>) {        
        // Adds input to monkeysInWaiting if follower is not empty
        console.log('[ BarrelOfMonkeysService.updateMonkeysInWaiting()');
        console.log('...followers.length: '+followers.length);       
        if(followers.length < 1) {
            console.log('...no followers!');
            return false;
        } else if(followers.length == 1) {
            console.log('...only 1 follower! ' +followers);
            this.monkeysInWaiting.push(this.findMonkey(followers[0], this.monkeysInTheBarrel));
            return true;
        } else {
            let patientMonkeys:Array<Monkey> = new Array();
            console.log('...followers: '+ followers);
            console.log(followers);
            for(let key of followers) {
                let foundMonkey = this.findMonkey(key, this.monkeysInTheBarrel);
                patientMonkeys.push(foundMonkey);
            }
            this.monkeysInWaiting.concat(patientMonkeys);
            console.log('...monkeysInWaiting updated');
            console.log('...'+patientMonkeys.toString+' are in-waiting');
            return true;
        }
    }
    outOfMonkeys() {
            console.log('...no monkeys in the barrel!'); 
            alert('No monkeys in the barrel!');
    }
    recordCurrentMonkeyAnswers(responses:Array<string>) {
        console.log('[ BarrelOfMonkeysService.recordCurrentMonkeyAnswers()');        
        // TODO: Refactor to accept non string responses
        this.currentMonkey.value.responses = responses;
    }
    importBOM(monkeyRoster:Array<any>) {  // what is roster?  JSON? path to txt file? 
        // This doesn't do much currently.  
        // TODO: Create monkeys and bom from a config file.  
        console.log('[ BarrelOfMonkeysService.importBOM()');
        monkeyRoster = this.getDummyBOM();
        for (let monkey of monkeyRoster) {
            let anotherMonkey: Monkey = monkey;
            this.monkeysInTheBarrel.push(anotherMonkey);
        }
        console.log('...monkeysInTheBarrel: ');
        console.log(this.monkeysInTheBarrel);
        // assign the first monkey in the barrel to be currentMonkey
        let nextMonkey = this.monkeysInTheBarrel.shift();
        this.currentMonkey.next(nextMonkey);        
    }
    queueFirstMonkey(){

    }
    findMonkey(key:string, barrel:Array<Monkey>) {
        console.log('[ BarrelOfMonkeysService.findMonkey');     
        console.log('...searching for: '+key+' in: ');
        console.log(barrel);
        for (let monkey of barrel) {
            console.log('...checking '+key+' against '+monkey.key);
             if (monkey.key == key) {
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
        let blurb1 = 'My name is ';
        let blurb2 = '!  I am wearing a ';
        let blurb3 = '!  Who would you like to see next?';
        let optionType = 'checkbox';
        let options:Array<string> = [];
        let responses:Array<string> = [];
        let followers:Array<string> = [];
        let hat = '';

        for (let n=0; n < keys.length; n++) {
            let monkey: Monkey = {
                key: keys[n], // How the monkey is summoned from the barrel
                blurb: blurb1 + keys[n] + blurb2 + hats[n] + blurb3, // What the monkey says.  Ususally a 1-2 sentence solicitation.
                optionType: optionType, // What kind of responses the monkey offers
                options: options, // The responses the monkey offers
                responses: responses,
                followers: followers, // The monkey or monkeys that comes after this monkey.  If null, you are done!
                submit: 'Next',  // label of the submit button
                hat: hats[n] // A general description of the monkey's head covering (all monkeys wear hats).
            };
            bom.push(monkey);
        }
        for (let n=0; n < bom.length; n++) {     
            if(bom.length > 1) {
                bom[n].followers = [];
                bom[n].options = keys;
            } else {
                monkey.followers = [];
                monkey.options = ['This is the only monkey', 'There is no real choice'];
            }
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
            followers: [], // :String[]  The keys of the monkey or monkeys that comes after this monkey.  If null, you are done!
            submit: 'Next', // :string  Label of submit button
            hat:  'yellow dunce cap' // :string  A general description of the monkey's head covering (all monkeys wear hats).
        };
    }
}