import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritsNewsletterModifComponent } from './inscrits-newsletter-modif.component';

describe('InscritsNewsletterModifComponent', () => {
  let component: InscritsNewsletterModifComponent;
  let fixture: ComponentFixture<InscritsNewsletterModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritsNewsletterModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscritsNewsletterModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
