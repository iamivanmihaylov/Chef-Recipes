import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOpenComponent } from './recipe-open.component';

describe('RecipeOpenComponent', () => {
  let component: RecipeOpenComponent;
  let fixture: ComponentFixture<RecipeOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
