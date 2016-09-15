import { Component, OnInit } from '@angular/core';
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
  private title: string;
  private links: Array<any>;
  public titleClicked = true;
  private user$;
  private auth$;
  private userName: string;

  constructor(private _as: AuthService, private router: Router) { 
    // this._as.user$.subscribe(user => (this.user = user));
    // this.auth = this._as.auth$.subscribe(res => (console.log("auth change")));
    this.user$ = _as.user$;
    // this._as.user$.subscribe( user => (this.userName = user.displayName));
    this.title = "Demo App!";
    // array of links.  labels are displayed.  address is handed to the router on click.
    this.links = [{'label':'1 Banana', 'address':'1 banana'},
                  {'label':'Datasets', 'address':'datasets'},
                  {'label':'Welcome', 'address':'welcome'},
                  {'label':'Dashboard', 'address':'dashboard'},
                  {'label':'User Data', 'address':'userdata'}
                  ];
    if(_as.user$) {
      this.links.push({'label':'Log Out', 'address':'logout'});
    } else {
      this.links.push({'label':'Log In', 'address':'login'});
    }
  }

  ngOnInit() {
  }

  onClick(address) { 
    console.log("...in UpheaderComponent02.onClick("+address+")");
    if(address === 'logout') {
      this._as.logout();
    }
    this.router.navigate(['/'+address]);
  }

}
