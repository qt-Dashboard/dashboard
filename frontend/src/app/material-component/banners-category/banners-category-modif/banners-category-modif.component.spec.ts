import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersCategoryModifComponent } from './banners-category-modif.component';

describe('BannersCategoryModifComponent', () => {
  let component: BannersCategoryModifComponent;
  let fixture: ComponentFixture<BannersCategoryModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersCategoryModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersCategoryModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
