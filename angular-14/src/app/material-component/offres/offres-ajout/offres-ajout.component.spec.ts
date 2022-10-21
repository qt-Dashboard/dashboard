import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresAjoutComponent } from './offres-ajout.component';

describe('OffresAjoutComponent', () => {
  let component: OffresAjoutComponent;
  let fixture: ComponentFixture<OffresAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
