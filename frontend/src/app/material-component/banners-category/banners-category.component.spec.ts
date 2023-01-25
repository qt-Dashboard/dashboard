import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersCategoryComponent } from './banners-category.component';

describe('BannersCategoryComponent', () => {
  let component: BannersCategoryComponent;
  let fixture: ComponentFixture<BannersCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
