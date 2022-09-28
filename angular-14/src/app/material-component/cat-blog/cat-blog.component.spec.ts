import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBlogComponent } from './cat-blog.component';

describe('CatBlogComponent', () => {
  let component: CatBlogComponent;
  let fixture: ComponentFixture<CatBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
