import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signals4 } from './signals-4';

describe('Signals4', () => {
  let component: Signals4;
  let fixture: ComponentFixture<Signals4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signals4],
    }).compileComponents();

    fixture = TestBed.createComponent(Signals4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
