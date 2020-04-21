import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaMultipleComponent } from './prueba-multiple.component';

describe('PruebaMultipleComponent', () => {
  let component: PruebaMultipleComponent;
  let fixture: ComponentFixture<PruebaMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
