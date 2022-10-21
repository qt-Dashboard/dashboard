import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersGenModifComponent } from './banners-gen-modif.component';

describe('BannersGenModifComponent', () => {
  let component: BannersGenModifComponent;
  let fixture: ComponentFixture<BannersGenModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersGenModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersGenModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
