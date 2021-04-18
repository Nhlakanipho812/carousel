import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrevComponent } from './button-prev.component';

describe('ButtonPrevComponent', () => {
  let component: ButtonPrevComponent;
  let fixture: ComponentFixture<ButtonPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
