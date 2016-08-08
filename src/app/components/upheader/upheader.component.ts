import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id, // fully resolved filename; defined at module load time
  selector: 'up-header',
  templateUrl: 'upheader.component.html',
  styleUrls: ['upheader.component.css'],
  directives: [AlertComponent]
})
export class UpHeaderComponent {
  public header = {title: 'The Cosmic Banana',
                    subtitle: 'And the neccesity of fluid gemoentry in an over ripe sun'};
  public navlinks = ["1 Banana", "2 Bananas", "3 Bananas"];
  public titleClicked = true;
  onSelect() { this.titleClicked = !this.titleClicked; }
}
