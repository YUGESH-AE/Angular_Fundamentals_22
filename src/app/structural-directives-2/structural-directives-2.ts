import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives-2',
  imports: [],
  templateUrl: './structural-directives-2.html',
  styleUrl: './structural-directives-2.css',
})
export class StructuralDirectives2 {

  divIsVisible:boolean=true;

  hideDiv(){
    this.divIsVisible=false;
  }

  showDiv(){
    this.divIsVisible=true;
  }

  cityList:string[]=['Chennai','Hydrabad','Pune','Banglore'];
}
