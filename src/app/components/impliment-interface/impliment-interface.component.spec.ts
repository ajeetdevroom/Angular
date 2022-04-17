import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplimentInterfaceComponent } from './impliment-interface.component';

describe('ImplimentInterfaceComponent', () => {
  let component: ImplimentInterfaceComponent;
  let fixture: ComponentFixture<ImplimentInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplimentInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplimentInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
