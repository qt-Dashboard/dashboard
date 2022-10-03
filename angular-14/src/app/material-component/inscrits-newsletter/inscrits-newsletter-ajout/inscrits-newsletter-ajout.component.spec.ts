import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritsNewsletterAjoutComponent } from './inscrits-newsletter-ajout.component';

describe('InscritsNewsletterAjoutComponent', () => {
  let component: InscritsNewsletterAjoutComponent;
  let fixture: ComponentFixture<InscritsNewsletterAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritsNewsletterAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscritsNewsletterAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
