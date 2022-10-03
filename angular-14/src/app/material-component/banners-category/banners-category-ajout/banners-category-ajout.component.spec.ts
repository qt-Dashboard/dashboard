import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersCategoryAjoutComponent } from './banners-category-ajout.component';

describe('BannersCategoryAjoutComponent', () => {
  let component: BannersCategoryAjoutComponent;
  let fixture: ComponentFixture<BannersCategoryAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersCategoryAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersCategoryAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
