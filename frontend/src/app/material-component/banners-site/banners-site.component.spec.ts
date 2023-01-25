import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersSiteComponent } from './banners-site.component';

describe('BannersSiteComponent', () => {
  let component: BannersSiteComponent;
  let fixture: ComponentFixture<BannersSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
