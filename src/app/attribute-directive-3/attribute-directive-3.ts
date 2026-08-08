import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-attribute-directive-3',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './attribute-directive-3.html',
  styleUrl: './attribute-directive-3.css',
})
export class AttributeDirective3 {

  // ngClass
  divBgColor = 'bg-success';

  // ngStyle
  fontSize = '20px';
  textColor = 'white';

  addDivColor(className: string) {
    this.divBgColor = className;
  }

  increaseFontSize() {
    this.fontSize = '30px';
  }

  decreaseFontSize() {
    this.fontSize = '16px';
  }
}
