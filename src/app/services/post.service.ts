import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Post} from './post';

@Injectable()
export class PostService {
  private posts;
  private rootUrl = 'http://jsonplaceholder.typicode.com/posts';
  private dummyPosts: Post[] = [
        {
          title: 'Post One',
          body: 'This is post one.',
        },
        {
          title: 'Post Two',
          body: 'This is post two.',
        },
        {
          title: 'Post Three',
          body: 'This is post three.',
        }
      ];

  constructor(private _http: Http) {

  }

  getDummyPosts(): Post[] {
    console.log('TODO: Write observable dummy data');
    return this.dummyPosts;
  }
  getPosts(): Observable<Post[]> {
    console.log('...in PostService.getPosts() ...fetching posts');
    return this._http.get(this.rootUrl).map(res => res.json());
  }

  addPost(newPost) {

  }
}
