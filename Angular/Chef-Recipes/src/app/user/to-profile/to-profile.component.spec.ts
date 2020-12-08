import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToProfileComponent } from './to-profile.component';

describe('ToProfileComponent', () => {
  let component: ToProfileComponent;
  let fixture: ComponentFixture<ToProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
