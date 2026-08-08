import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirective3 } from './attribute-directive-3';

describe('AttributeDirective3', () => {
  let component: AttributeDirective3;
  let fixture: ComponentFixture<AttributeDirective3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirective3],
    }).compileComponents();

    fixture = TestBed.createComponent(AttributeDirective3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
