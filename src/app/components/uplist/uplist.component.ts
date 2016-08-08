import { Component, OnInit } from '@angular/core';
import { UpListLi } from './uplistli.component';
import { PostService } from '../../services/post.service';
import { Post } from '../../services/post';

@Component({
  moduleId: module.id,
  selector: 'up-list',
  templateUrl: 'uplist.component.html',
  styleUrls: ['uplist.component.css'],
  directives: [UpListLi],
  providers: [PostService]
})
export class UpListComponent implements OnInit {
  public liClicked = true;
  private posts:Post[];
  private title;
  private body;
  private newPost;

  onSelect() {
    this.liClicked = !this.liClicked;
    console.log('...in UpListComponent.onSelect()');
  }

  constructor(private _postService:PostService){
    console.log('...in UpListComponent.constructor');
  }
  ngOnInit(){
    this._postService.getPosts().subscribe(posts => { this.posts = posts;});
    console.log("...fetched posts : "+ this.posts);
  }

  addPost(){

  }

}
