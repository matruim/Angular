import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {PostModel} from "./post.model";
import {catchError, map, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://angulardb-5dbd9-default-rtdb.firebaseio.com/posts.json';
  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string){
    const postData: PostModel = {title, content};
    // Send Http request
    return this.http.post<{ name: string }>(this.url, postData, {observe: 'response'});
  }

  fetchPosts(){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('custom','key');
    return this.http.get<{ [key: string]: PostModel }>(this.url, {
      headers: new HttpHeaders({'Custom-Header': 'Hello',}),
      params: searchParams,
      responseType: 'json',
    })
      .pipe(
        map(responseData => {
          const postArray: PostModel[] = [];
          for ( const key in responseData ){
            if (responseData.hasOwnProperty(key)){
              postArray.push({...responseData[key], id: key})
            }
          }
          return postArray;
        }),
        catchError(errorRes => {
          console.log(errorRes);
          return throwError(errorRes);
        }),
      );
  }
  deleteAllPosts(){
    return this.http.delete(this.url, {observe: 'events', }).pipe(
      tap(event => {
        if(event.type == HttpEventType.Response){
          console.log(event);
        }
      }),
    )
  }
}
