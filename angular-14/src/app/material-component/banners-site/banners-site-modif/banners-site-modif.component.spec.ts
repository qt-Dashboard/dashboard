import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersSiteModifComponent } from './banners-site-modif.component';

describe('BannersSiteModifComponent', () => {
  let component: BannersSiteModifComponent;
  let fixture: ComponentFixture<BannersSiteModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersSiteModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersSiteModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
