import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding1 } from './data-binding-1';

describe('DataBinding1', () => {
  let component: DataBinding1;
  let fixture: ComponentFixture<DataBinding1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBinding1],
    }).compileComponents();

    fixture = TestBed.createComponent(DataBinding1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
