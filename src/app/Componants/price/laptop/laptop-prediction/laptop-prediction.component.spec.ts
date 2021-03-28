import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopPredictionComponent } from './laptop-prediction.component';

describe('LaptopPredictionComponent', () => {
  let component: LaptopPredictionComponent;
  let fixture: ComponentFixture<LaptopPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
