import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
    console.log(" ChildChild(ngOnInit) - " + this.name )
  }

  ngOnChanges(){
    console.log(" ChildChild(ngOnChanges) - " + this.name )
  }

  ngAfterContentInit() {
    console.log(" ChildChild(ngAfterContentInit) - " + this.name )
  }

}
