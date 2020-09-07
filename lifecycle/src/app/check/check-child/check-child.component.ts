import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit {


  constructor() { 
    console.log(" [checkchild]constructor")
  }

  ngOnInit(): void {
    console.log(" [checkchild]ngOnInit");
  }

  ngOnChanges() {
    console.log(" [checkchild]ngOnChanges");
  }

  ngDoCheck() {
    console.log(" [checkchild]ngDoCheck");

  }

  ngAfterContentInit() {
    console.log(" [checkchild]ngAfterContentInit");

  }

  ngAfterContentChecked() {
    console.log(" [checkchild]ngAfterContentChecked");

  }

  ngAfterViewInit() {
    console.log(" [checkchild]ngAfterViewInit");

  }

  ngAfterViewChecked() {
    console.log(" [checkchild]ngAfterViewChecked");

  }

  ngOnDestroy() {
    console.log(" [checkchild]ngOnDestroy");

  }
}
