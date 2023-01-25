import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesModifComponent } from './categories-modif.component';

describe('CategoriesModifComponent', () => {
  let component: CategoriesModifComponent;
  let fixture: ComponentFixture<CategoriesModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
