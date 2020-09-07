import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, ConnectableObservable } from 'rxjs';
import { publish, refCount, share } from 'rxjs/operators';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.css']
})
export class HotObservablesComponent implements OnInit {

  n: number = 0;
  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  myObservable: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable(
      (observer:Observer<number>) => {
        let i: number = 0;
        console.log('%c Obsevable created','background: #cccccc; color:#ff0000')
        setInterval(()=>{
          i++;
          console.log(i);
          (i==100) ? observer.complete() : observer.next(i);
        },1000);
      }
    );
    //this.usingSubjects();
    //this.usingPublish();
    this.usingShare()
  }

  usingShare(){

        const multicasted = this.myObservable.pipe(share()) ;
        
        this.s1 = 'waiting or interval ...';
        setTimeout(()=>{
          multicasted.subscribe((_n) => {
            this.n1 = _n;
            this.s1 = 'OK';
          })
        },2000);
    
        this.s2 = 'waiting or interval ...';
        setTimeout(()=>{
          multicasted.subscribe((_n) => {
            this.n2 = _n;
            this.s2 = 'OK';
          })
        },4000);
      }

  usingPublish(){
//    const multicasted = this.myObservable.pipe(
 //     publish(), refCount()
//    );
    const multicasted: ConnectableObservable<number> = this.myObservable.pipe(
       publish()
     ) as ConnectableObservable<number>;

    // multicasted.connect();
    
    this.s1 = 'waiting or interval ...';
    setTimeout(()=>{
      multicasted.subscribe((_n) => {
        this.n1 = _n;
        this.s1 = 'OK';
      })
    },2000);

    this.s2 = 'waiting or interval ...';
    setTimeout(()=>{
      multicasted.connect();
      multicasted.subscribe((_n) => {
        this.n2 = _n;
        this.s2 = 'OK';
      })
    },4000);
  }

  usingSubjects() {
    const subject = new Subject<number>();
    
    this.myObservable.subscribe(subject);
    this.s1 = 'waiting or interval ...';
    setTimeout(()=>{
      subject.subscribe((_n) => {
        this.n1 = _n;
        this.s1 = 'OK';
      })
    },2000);

    this.s2 = 'waiting or interval ...';
    setTimeout(()=>{
      subject.subscribe((_n) => {
        this.n2 = _n;
        this.s2 = 'OK';
      })
    },4000);
  }

}
