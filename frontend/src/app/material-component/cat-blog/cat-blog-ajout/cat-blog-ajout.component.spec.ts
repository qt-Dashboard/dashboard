import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBlogAjoutComponent } from './cat-blog-ajout.component';

describe('CatBlogAjoutComponent', () => {
  let component: CatBlogAjoutComponent;
  let fixture: ComponentFixture<CatBlogAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatBlogAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatBlogAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
