import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My Button";
  i = 0;
  spinnerMode="determinate";
  btnEnable=true;
  selectDisable=false;
  selectedOption=1;
  inputName="John";
  spinnervalue = 0;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log("click");
  }

  inc(){
    this.i++;
    this.buttonName = "it was clicked " + this.i + " times";
    this.spinnervalue = this.i;
    if (this.i % 100 == 0){
      this.i = 0;
    }
    
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode ="indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";

    },3000)
  }

  cbChange(event){
    console.log(event);
    this.selectDisable = event.checked;
  }

  selectChange(event){
    console.log(event);
    this.selectedOption = event.value;
  }
  
  inputEvent(event){
    console.log(event.target.value)
    console.log(this.inputName);
  }

}
