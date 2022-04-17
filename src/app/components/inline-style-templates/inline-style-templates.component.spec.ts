import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleTemplatesComponent } from './inline-style-templates.component';

describe('InlineStyleTemplatesComponent', () => {
  let component: InlineStyleTemplatesComponent;
  let fixture: ComponentFixture<InlineStyleTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineStyleTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineStyleTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
