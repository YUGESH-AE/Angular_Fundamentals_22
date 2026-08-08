import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [],
  templateUrl: './life-cycle-hooks.html',
  styleUrl: './life-cycle-hooks.css',
})
export class LifeCycleHooks  implements
  OnInit
  ,AfterViewInit, AfterViewChecked
  ,AfterContentInit, AfterContentChecked, OnDestroy{

  constructor() {
    console.log('lifeCycle Hooks');
  }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }
    ngAfterContentChecked(): void {
       console.log('ngAfterContentChecked');
    }
    ngAfterContentInit(): void {
       console.log('ngAfterContentInit');
    }

    ngOnInit(): void {
        console.log('ngOnInit');
    }

    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
    }

    ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
    }

}
