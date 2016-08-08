import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UpFirebaseListLi } from './upfirebaselistli.component';

@Component({
  moduleId: module.id,
  selector: 'up-firebaselist',
  templateUrl: 'upfirebaselist.component.html',
  styleUrls: ['upfirebaselist.component.css'],
  directives: [UpFirebaseListLi]
})
export class UpFirebaseListComponent {
  public liClicked = true;
  onSelect() {
    this.liClicked = !this.liClicked;
    console.log("...in UpFirebaseListComponent.onSelect()");
  }

  item: FirebaseObjectObservable<any>;
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.item = af.database.object('/customers/Sprout for Business/');
    this.items = af.database.list('/customers/Sprout for Business/constant_contact_campaign_summaries');
  }
}
