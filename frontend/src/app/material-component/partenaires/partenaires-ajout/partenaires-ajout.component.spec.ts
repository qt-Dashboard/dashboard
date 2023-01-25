import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesAjoutComponent } from './partenaires-ajout.component';

describe('PartenairesAjoutComponent', () => {
  let component: PartenairesAjoutComponent;
  let fixture: ComponentFixture<PartenairesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenairesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
