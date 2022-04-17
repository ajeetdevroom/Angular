import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseConditionComponent } from './if-else-condition.component';

describe('IfElseConditionComponent', () => {
  let component: IfElseConditionComponent;
  let fixture: ComponentFixture<IfElseConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfElseConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfElseConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
