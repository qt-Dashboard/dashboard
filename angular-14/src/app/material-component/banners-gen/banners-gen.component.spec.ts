import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersGenComponent } from './banners-gen.component';

describe('BannersGenComponent', () => {
  let component: BannersGenComponent;
  let fixture: ComponentFixture<BannersGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
