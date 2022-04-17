import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindignComponent } from './property-bindign.component';

describe('PropertyBindignComponent', () => {
  let component: PropertyBindignComponent;
  let fixture: ComponentFixture<PropertyBindignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
