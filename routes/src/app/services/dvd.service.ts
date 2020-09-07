import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvd$ = this.dvdSubject$.asObservable();

  constructor() {
    timer(2000)
      .subscribe(
        () => {
          this.dvdSubject$.next([
            {title: "DVD Beeges", year: 2016, genre: "Music"},
            {title: "The wind", year: 2018, genre: "Movie"},

          ])
        }
      )
   }

   add(b: Dvd) {
    let books = this.dvdSubject$.getValue();
    books.push(b);
   }

   remove(i: number){
     let books = this.dvdSubject$.getValue();

     if (i >=0 && i <books.length)
      books.splice(i,1);
   }

   get(i: number): Observable<Dvd>{
      let dvds = this.dvdSubject$.getValue();
      return this.dvd$.pipe(
        map(b => (i >=0 && i <dvds.length) ? dvds[i]: null),
        delay(1000)
      )

   }
}
