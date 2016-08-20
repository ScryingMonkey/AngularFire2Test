import { Component, OnInit, Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {Observable} from 'rxjs/observable';

import { UplistService } from '../uplist/uplist.service';

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
  
  constructor(public af: AngularFire) {
  console.log('...in UpContentPanelComponent.constructor');
  this.af.auth.subscribe(auth => console.log(auth));
  }

  loginWithFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
    console.log('Logged in user with Facebook :');
    console.dir(this.af.auth);
  }

  loginWithGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
    console.log('Logged in user with Google :');
    console.dir(this.af.auth);
  }

}