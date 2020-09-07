import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, delay, toArray } from 'rxjs/operators';

interface User{
  login: string;
  name: string;
}

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  options$: Observable<string[]>;
  user$: Observable<User>;

  constructor() { }

  ngOnInit(): void {
    this.options$ = Observable.create(
      (observer) => {
        for(let i = 0; i<10;i++){
          observer.next("this is my" + i +"th option.");
        }
        observer.complete();
      }
    )
    .pipe(
      map(s=>s+'!'),
      toArray(),
      delay(1000)
    )

    //this.options$.subscribe(s=>console.log(s));
    this.user$ = new Observable<User>(
      (observer) => {
        let names =  ["Mr. James","Mr. John","Mr. Ray","Ms. Angel"];
        let logins =  ["James","John","Ray","Angel"];

        let i = 0;
        setInterval(()=>{
          if (i==4)
            observer.complete();
          else{
            observer.next({login: logins[i], name: names[i]});
          }
          i++;
        },3000);

        
      }
    )

    this.user$.subscribe(s=>console.log(s));
  }

}
