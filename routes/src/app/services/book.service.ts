import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private  bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(2000)
      .subscribe(() =>this.bookSubject$.next([
        {title: "Book1", pages:200, authors: ["john", "nicole"]},
        {title: "Book2", pages:100, authors: ["mily"]},
        {title: "Book3", pages:250, authors: ["fred"]},
        {title: "Book4", pages:350, authors: ["jane", "peter"]},
        {title: "Book5", pages:120, authors: ["paul", "john"]},
      ]))
    
   }

   add(b: Book) {
    let books = this.bookSubject$.getValue();
    books.push(b);
   }

   remove(i: number){
     let books = this.bookSubject$.getValue();

     if (i >=0 && i <books.length)
      books.splice(i,1);
   }

   get(i: number): Observable<Book>{
      let books = this.bookSubject$.getValue();
      return this.books$.pipe(
        map(b => (i >=0 && i <books.length) ? books[i]: null),
        delay(1000)
      )

   }
}
