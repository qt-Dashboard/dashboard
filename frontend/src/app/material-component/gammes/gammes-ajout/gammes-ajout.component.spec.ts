import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammesAjoutComponent } from './gammes-ajout.component';

describe('GammesAjoutComponent', () => {
  let component: GammesAjoutComponent;
  let fixture: ComponentFixture<GammesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GammesAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GammesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
