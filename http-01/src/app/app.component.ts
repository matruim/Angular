import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';
import {PostModel} from "./post.model";
import {PostService} from "./post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: PostModel[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: PostModel) {
    console.log(postData);
    this.postService.createAndStorePost(postData.title, postData.content).subscribe(() => this.onFetchPosts());
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error =>{
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.isFetching = true;
    this.postService.deleteAllPosts().subscribe(() => {
      this.isFetching = false;
      this.loadedPosts = [];
    })
  }

  onHandleError() {
    this.isFetching = false;
    this.error = null;
  }
}
