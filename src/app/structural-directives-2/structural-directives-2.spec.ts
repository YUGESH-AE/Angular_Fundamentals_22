import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectives2 } from './structural-directives-2';

describe('StructuralDirectives2', () => {
  let component: StructuralDirectives2;
  let fixture: ComponentFixture<StructuralDirectives2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectives2],
    }).compileComponents();

    fixture = TestBed.createComponent(StructuralDirectives2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
