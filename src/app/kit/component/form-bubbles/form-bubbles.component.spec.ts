import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBubblesComponent } from './form-bubbles.component';

describe('FormBubblesComponent', () => {
  let component: FormBubblesComponent;
  let fixture: ComponentFixture<FormBubblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBubblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
