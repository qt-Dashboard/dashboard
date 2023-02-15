import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsAjoutComponent } from './produits-ajout.component';

describe('ProduitsAjoutComponent', () => {
  let component: ProduitsAjoutComponent;
  let fixture: ComponentFixture<ProduitsAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
