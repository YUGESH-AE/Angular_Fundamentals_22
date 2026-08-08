import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from './User';

@Component({
  selector: 'app-template-form',
  imports: [
    FormsModule
  ],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  userObj:User={
    firstName:'',
    lastName:'',
    username:'',
    city:'',
    state:'',
    zip:'',
    isTermsAgree:false
  }

  onSave(){
    const formDate=this.userObj;
  }
}
