import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAjoutComponent } from './pages-ajout.component';

describe('PagesAjoutComponent', () => {
  let component: PagesAjoutComponent;
  let fixture: ComponentFixture<PagesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
