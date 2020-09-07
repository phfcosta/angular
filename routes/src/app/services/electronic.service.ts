import { Injectable } from '@angular/core';
import { Electronic } from '../models/electronic';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  private electronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public electronics$ = this.electronicSubject$.asObservable();

  constructor(

  ) { 
    timer(1000)
      .subscribe(() => {
        this.electronicSubject$.next([
          { name: "Headphone", brand:"Bose", price:200, description: "Noise Cancelling"},
          { name: "Portable HD", brand:"Samsung", price:100, description: "2TB Hard disk"},
          { name: "Monitor 23", brand:"AOC", price:200, description: "HDMI/VGA"},
          { name: "Processo 17 8700K", brand:"Intel", price:400, description: "12MB cache"},
          { name: "Mouse Wireless", brand:"Logitech", price:50, description: "For Gamers"},

        ])
      })
  }

  get(i: number): Observable<Electronic>{
    
    return this.electronics$.pipe(
      map(electronics => (i >=0 && i <electronics.length) ? electronics[i]: null),
      delay(1000)
    )
  }
}
