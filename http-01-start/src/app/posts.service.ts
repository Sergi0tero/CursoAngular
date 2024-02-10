import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { catchError, map } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService{
    error = new Subject<string>();

    constructor(private http: HttpClient){}

    createAndStorePost(postData : Post){
        return this.http.post<{ name : string }>('https://angular-course-c9395-default-rtdb.firebaseio.com/posts.json', postData
        )
    }

    fetchPosts(){
        return this.http.get<{ [key : string]: Post }>('https://angular-course-c9395-default-rtdb.firebaseio.com/posts.json')
        .pipe(
            map((responseData : {[key : string]: Post}) =>{
            const postArray : Post[] = [];
            for(const key in responseData){
                if(responseData.hasOwnProperty(key)){
                postArray.push({...responseData[key], id: key});
                }
            }
            return postArray; 
        }, catchError(errorRes =>{
            return throwError(errorRes);
        })))
    }

    deletePosts(){
        return this.http.delete('https://angular-course-c9395-default-rtdb.firebaseio.com/posts.json')
    }
}