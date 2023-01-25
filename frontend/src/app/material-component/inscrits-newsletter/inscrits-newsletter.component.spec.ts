import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritsNewsletterComponent } from './inscrits-newsletter.component';

describe('InscritsNewsletterComponent', () => {
  let component: InscritsNewsletterComponent;
  let fixture: ComponentFixture<InscritsNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritsNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscritsNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
