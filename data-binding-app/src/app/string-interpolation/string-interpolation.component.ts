import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "john";

  age = 100;

  person = {
    firstname: "john",
    lastname: "lastname",
    age:300,
    address:"endereco"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
