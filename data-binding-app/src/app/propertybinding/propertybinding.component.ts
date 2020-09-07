import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  color: string = "accent";
  btnDisabled = true;
  colors = ['primary','accent','warn',''];
  idx = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.idx = (this.idx + 1) % this.colors.length; 
    },1000);
  }

}
