import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslettersModifComponent } from './newsletters-modif.component';

describe('NewslettersModifComponent', () => {
  let component: NewslettersModifComponent;
  let fixture: ComponentFixture<NewslettersModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewslettersModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewslettersModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
