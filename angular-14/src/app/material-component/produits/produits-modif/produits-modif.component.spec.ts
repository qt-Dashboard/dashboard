import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsModifComponent } from './produits-modif.component';

describe('ProduitsModifComponent', () => {
  let component: ProduitsModifComponent;
  let fixture: ComponentFixture<ProduitsModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
