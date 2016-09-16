import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AngularFire, FirebaseAuth, AuthProviders, AuthMethods } from 'angularfire2';
import {Subscription} from 'rxjs/subscription';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";
import { Router }   from '@angular/router';

@Injectable() 
export class AuthService {
  // public auth$: Subject<any>;
  private user: BehaviorSubject<Object> = new BehaviorSubject({});
  private userName: BehaviorSubject<string> = new BehaviorSubject('???');
  private userListData: BehaviorSubject<any> = new BehaviorSubject({});
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private detailKeys: Array<string> = ['displayName', 'email', 'photoURL'];

  constructor(public _af: AngularFire, public router: Router) {
    console.log('[ AuthService.constructor');
    // this.auth$ = _af.auth;
    this._af.auth.subscribe(auth => {
      console.log("[ AuthService.constructor._af.auth.subscription");
      if(auth) {
        this.user.next( auth.auth );
        this.userName.next( auth.auth.displayName );
        this.isLoggedIn.next( true );
        this.userListData.next( this.parseUserListData( auth.auth, this.detailKeys ));
        this.router.navigate( ['/loggedin'] );
        console.log( "......Logged in!  user: " + auth.auth.displayName );
        console.dir( auth.auth );
      } else { 
        console.log( '......not logged in' );
        this.user.next( null );
        this.userName.next( "Please Log In" );
        this.isLoggedIn.next( false );
        this.router.navigate( ['/logout'] );
      }
    });  
  }

  loginWithFacebook() {
    this._af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
    this.detailKeys = ['displayName', 'email', 'photoURL'];
    console.log('Logged in user with Facebook :');
  }

  loginWithGoogle() {
    this._af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
    this.detailKeys = ['displayName', 'email', 'photoURL'];
    console.log('...Logged in user with Google :');
  }

  logout() {
      console.log("[ AuthService.logout");
      this._af.auth.logout();
      console.log("...isLoggedIn == " + this.isLoggedIn.value);   
  }

  loginTester() {
    console.log("[ AuthService testing method");
    console.log("......isLoggedIn == " + this.isLoggedIn.value);
    console.log("......logged in user :"+this.userName.value);
    console.dir(this.user.value);
  }
  // Must return an object that fits listdata.interface
  //     listTitle: string : 'Test Data'
  //     liTitleKey: string : 'liTitle' 
  //     liDetailKeys: Array<string> : [ 'detail1', 'detail2', 'detail3']
  //     liItems: Array<Object> : [{'liTitle': 'liTitle3' , 'detail1':10485, 'detail2':3409, 'detail3':245}]
  parseUserListData(user, detailKeys) {
    console.log('[ AuthService.parseUserListData');
    let details = {'liTitle': '...'};
    let keys = [];
    for(let key of detailKeys) {
       if(user[key]) { 
         details[key] = user[key]; 
        //  detailKeys.push(key);   <---Oh so dumb.  Retained as a reminder to commit often.
        }
    }
    let data = {'listTitle':'User Details', 
                'liTitleKey':'liTitle',
                'liDetailKeys': detailKeys,
                'liItems': details };
    console.log('...parseUserListData complete, data :');
    console.dir(data);
    return data;
  }
  // Getters
  get user$() { return this.user.asObservable(); }
  get userName$() { return this.userName.asObservable(); }
  get isLoggedIn$() { return this.isLoggedIn.asObservable(); }
  get userListData$() { return this.userListData.asObservable(); }
}