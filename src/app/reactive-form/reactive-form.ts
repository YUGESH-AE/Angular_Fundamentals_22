import { Component } from '@angular/core';
import {User} from '../template-form/User';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {validate} from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  constructor() {
    const isValid:boolean=this.userForm.valid;
  }

  userForm:FormGroup=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    username:new FormControl("",[Validators.required,Validators.minLength(3)]),
    city:new FormControl("",[Validators.required]),
    state:new FormControl("",[Validators.required]),
    zip:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{6}$")]),
    isTermsAgree:new FormControl(false, [Validators.required])

  });

  clickOnSave(){
    const formValue=this.userForm.value;
    debugger;
  }
}
