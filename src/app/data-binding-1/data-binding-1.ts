import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding-1',
  imports: [
    DatePipe,
    FormsModule
  ],
  templateUrl: './data-binding-1.html',
  styleUrl: './data-binding-1.css',
})
export class DataBinding1 {

  name:string='yugesh';
  rollNo:number=123;
  isActive:boolean=true;
  currentDate:Date = new Date();
  myPlaceHolder:string='Enter your full name';

  constructor() {
    console.log('data binding 1');
    console.log(this.name);
    console.log(this.rollNo);
    console.log(this.isActive);
    console.log(this.currentDate);
  }

  showWelcomeMessage(){
    alert('Welcome to the data binding 1');
  }
}
