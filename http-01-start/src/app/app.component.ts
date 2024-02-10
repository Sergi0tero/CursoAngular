import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http.post<{ name : string }>('https://angular-course-c9395-default-rtdb.firebaseio.com/posts.json', postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
    this.isFetching = true;
    this.http.get<{ [key : string]: Post }>('https://angular-course-c9395-default-rtdb.firebaseio.com/posts.json')
    .pipe(
      map((responseData : {[key : string]: Post}) =>{
      const postArray : Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key], id: key});
        }
      }
      return postArray; 
    }))
    .subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    });
  }

}
