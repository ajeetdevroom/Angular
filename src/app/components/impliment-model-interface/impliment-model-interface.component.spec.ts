import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplimentModelInterfaceComponent } from './impliment-model-interface.component';

describe('ImplimentModelInterfaceComponent', () => {
  let component: ImplimentModelInterfaceComponent;
  let fixture: ComponentFixture<ImplimentModelInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplimentModelInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplimentModelInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
