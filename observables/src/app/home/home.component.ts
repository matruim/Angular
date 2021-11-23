import { Component, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firstObsSubscription: Subscription;
  private secondObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = new Observable(observer =>{
      let count = 0;
      setInterval(() =>{
        observer.next(count);
        if(count == 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Count is greater than 3.'))
        }
        count++;
      }, 1000);
    });

    this.secondObsSubscription = customIntervalObservable.pipe(map((data:number) => `Round: ${data+1}`)).subscribe(data => {
      console.log(data);
    }, error => {
      alert(error.message);
    }, () =>{
      console.log('completed');
    });
  }
  ngOnDestroy(){
    // this.firstObsSubscription.unsubscribe();
    this.secondObsSubscription.unsubscribe();
  }

}
