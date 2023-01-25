import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersSiteAjoutComponent } from './banners-site-ajout.component';

describe('BannersSiteAjoutComponent', () => {
  let component: BannersSiteAjoutComponent;
  let fixture: ComponentFixture<BannersSiteAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersSiteAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersSiteAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
