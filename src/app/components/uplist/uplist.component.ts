import { Component, OnInit } from '@angular/core';
import { UpLiComponent } from './upli.component';
import { PostService } from '../../services/post.service';
import { Post } from '../../services/post';
import {Observable} from 'rxjs/observable';

@Component({
  moduleId: module.id,
  selector: 'up-list',
  templateUrl: 'uplist.component.html',
  styleUrls: ['uplist.component.css'],
  directives: [UpLiComponent],
  inputs: ['items', 'title']
})
export class UpListComponent implements OnInit {
  public liClicked = true;
  private items: Observable<Post[]>;
  private title: string;

  onSelect() {
    this.liClicked = !this.liClicked;
    console.log('...in UpListComponent.onSelect(), title: '+this.title);
  }

  constructor(){
    console.log('...in UpListComponent.constructor, title: '+this.title);
  }
  ngOnInit(){
    console.log('...in UpListComponent.ngOnInit() title: '+this.title+', items: '+ this.items);
  }

  ngDoCheck(){
    // this._postService.getPosts().subscribe(
    //   posts => this.posts = posts,
    //   error => console.log(error)
    // );
    // console.log("...in UpListComponent.ngOnInit() ...fetched posts : "+ this.posts);
  }
}
