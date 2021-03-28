import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhonePredictionComponent } from './smart-phone-prediction.component';

describe('SmartPhonePredictionComponent', () => {
  let component: SmartPhonePredictionComponent;
  let fixture: ComponentFixture<SmartPhonePredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartPhonePredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhonePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
