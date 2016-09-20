import { Component, OnInit, Input } from '@angular/core';
// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterLink } from '@angular/router';
import { ROUTER_DIRECTIVES, Router }   from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id, // fully resolved filename; defined at module load time
  selector: 'up-header02',
  templateUrl: './upheader02.component.html',
  styleUrls: ['./upheader02.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ ]
  
})
export class UpheaderComponent02 implements OnInit {
  @Input() title: string;
  @Input() links: Array<any>; // array of links.  labels are displayed.  address is handed to the router on click.
  public titleClicked = true;
  private user$;
  private auth$;
  private userName: string;

  constructor(private _as: AuthService, private router: Router) { 
    console.log('[ UpheaderComponent02.constructor ]');
    // subscribe to the user object for the app
    this.user$ = this._as.user$;
  }

  ngOnInit() {
        // set the last link (Input from parent) in links to "Log In"
    this.links[this.links.length-1] = {'label':'Log In', 'address':'login'};
    // change last link to 'Log in' or 'Log Out'
    // updates when logged in status changes
    this._as.isLoggedIn$.subscribe(isLoggedIn => {
          if(isLoggedIn) {
            this.links[this.links.length-1] = {'label':'Log Out', 'address':'logout'};
          } else {
            this.links[this.links.length-1] = {'label':'Log In', 'address':'login'};
            //ToDo: if logged out, remove UserData link
          }
       });
  }

  onClick(address) { 
    console.log("...in UpheaderComponent02.onClick("+address+")");
    if(address === 'logout') {
      this._as.logout();
    }
    this.router.navigate(['/'+address]);
  }

}
