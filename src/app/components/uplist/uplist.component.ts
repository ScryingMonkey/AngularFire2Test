import { Component, OnInit, Input  } from '@angular/core';
import { UpLiComponent } from './upli.component';
// import { PostService } from '../../services/post.service';
// import { Post } from '../../services/post';
import {Observable} from 'rxjs/observable';

@Component({
  moduleId: module.id,
  selector: 'up-list',
  templateUrl: 'uplist.component.html',
  styleUrls: ['uplist.component.css'],
  directives: [UpLiComponent]
})
export class UpListComponent implements OnInit {
  public liClicked = true;
  @Input() items: Observable<any[]>;
  @Input() title: string;
  @Input() liTitleKey: string;
  @Input() detailLabels: Array<string>;
  @Input() keysToDisplayInDetail: string;

  onSelect() {
    this.liClicked = !this.liClicked;
    console.log('...in UpListComponent.onSelect(), title: ' + this.title);
  }

  constructor() {
    console.log('...in UpListComponent.constructor, title: ' + this.title);
  }
  ngOnInit() {
    console.log('...in UpListComponent.ngOnInit() title: ' + this.title + ', items: ' + this.items);
  }
}
