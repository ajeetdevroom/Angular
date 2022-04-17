import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSampleFormComponent } from './intro-sample-form.component';

describe('IntroSampleFormComponent', () => {
  let component: IntroSampleFormComponent;
  let fixture: ComponentFixture<IntroSampleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroSampleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
