import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersGenAjoutComponent } from './banners-gen-ajout.component';

describe('BannersGenAjoutComponent', () => {
  let component: BannersGenAjoutComponent;
  let fixture: ComponentFixture<BannersGenAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersGenAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersGenAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
