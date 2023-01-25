import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBlogModifComponent } from './cat-blog-modif.component';

describe('CatBlogModifComponent', () => {
  let component: CatBlogModifComponent;
  let fixture: ComponentFixture<CatBlogModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatBlogModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatBlogModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
