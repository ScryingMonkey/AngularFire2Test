import { Component, OnInit, Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AngularFire, FirebaseAuth, AuthProviders, AuthMethods } from 'angularfire2';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { Router }   from '@angular/router';

import { UplistService } from '../uplist/uplist.service';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'uplogin-page',
  templateUrl: 'uploginpage.component.html',
  styleUrls: ['uploginpage.component.css'],
  providers: [ ]
})
export class UpLoginPageComponent {
  private listTitle: string;
  private liTitleKey: string;
  private auth: Subject<any>;
  private userName;
  public isLoggedIn: boolean;
  
  constructor(public _as: AuthService, public af: AngularFire, public router: Router) {
    console.log('...in UpContentPanelComponent.constructor');
    _as.isLoggedIn$.subscribe(isLoggeIn => this.isLoggedIn = isLoggeIn);
  }
  loginWithEmail() {  }
  loginWithGoogle() { this._as.loginWithGoogle(); }
  loginWithFacebook() { this._as.loginWithFacebook(); }
  logout() { this._as.logout(); }
  loginTester() { this._as.loginTester(); }

}