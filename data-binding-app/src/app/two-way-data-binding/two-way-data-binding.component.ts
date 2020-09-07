import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string= "122";
  name2: string = "456";

  client = {
    firstName: "john",
    lastName: "lastName",
    address: "address",
    age: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
