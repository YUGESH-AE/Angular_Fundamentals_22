import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-signals-4',
  imports: [],
  templateUrl: './signals-4.html',
  styleUrl: './signals-4.css',
})
export class Signals4 {

  name= signal<string>('yugesh');
  lastName=signal<string>('Ae');
  mark=signal<number>(0);

  constructor() {
    this.name.set('AngularTutorial1');
    this.mark.update((v)=>v+1);
  }
}
