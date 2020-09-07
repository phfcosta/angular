import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit,AfterViewInit {

  @ViewChild('myrect') myrect: ElementRef;

  top: number=40;
  left: number=40;

  constructor() { }

  ngOnInit(): void {
      
  }

  ngAfterViewInit(){
    let mousedown = fromEvent(this.myrect.nativeElement,'mousedown');
    let mousemove = fromEvent(document,'mousemove');
    let mouseup = fromEvent(document,'mouseup');

    mousedown.subscribe(
      (e:MouseEvent) => {
        //console.log(e);
        let x = e.pageX;
        let y = e.pageY;

        mousemove
          .pipe(
            takeUntil(mouseup)
          )
          .subscribe(
          (em: MouseEvent)=>{
           // console.log(em);
            let offsetx = x - em.pageX;
            let offsety = y - em.pageY;
            this.top -= offsety;
            this.left -= offsetx; 
            x = em.pageX;
            y = em.pageY;
          }
        )
      }
    );

  }

  

}
