import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: "bob", role: "admin", lastlogin: new Date('6/8/2020')},
    {login: "lia", role: "user", lastlogin: new Date('7/6/2020')},
    {login: "john", role: "admin", lastlogin: new Date('8/6/2020')},
    {login: "robin", role: "user", lastlogin: new Date('9/7/2020')},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
