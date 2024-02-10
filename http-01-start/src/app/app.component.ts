import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub : Subscription;

  constructor(private postsService : PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData).subscribe(responseData => {
      console.log(responseData);
      this.fetchPosts();
    });;
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe( responseData => {
      console.log(responseData);
      this.fetchPosts();
      //this can be changed to the following to avoid making another http request
      //this.loadedPosts = [];
    });
  }

  private fetchPosts(){
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    });;
  }

}
