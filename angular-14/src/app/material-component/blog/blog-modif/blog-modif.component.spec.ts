import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogModifComponent } from './blog-modif.component';

describe('BlogModifComponent', () => {
  let component: BlogModifComponent;
  let fixture: ComponentFixture<BlogModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
