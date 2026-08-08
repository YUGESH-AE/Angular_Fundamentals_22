import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudApi } from './crud-api';

describe('CrudApi', () => {
  let component: CrudApi;
  let fixture: ComponentFixture<CrudApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
