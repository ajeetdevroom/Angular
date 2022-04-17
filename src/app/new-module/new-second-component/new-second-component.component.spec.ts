import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSecondComponentComponent } from './new-second-component.component';

describe('NewSecondComponentComponent', () => {
  let component: NewSecondComponentComponent;
  let fixture: ComponentFixture<NewSecondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSecondComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
