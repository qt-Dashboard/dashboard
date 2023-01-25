import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesModifComponent } from './partenaires-modif.component';

describe('PartenairesModifComponent', () => {
  let component: PartenairesModifComponent;
  let fixture: ComponentFixture<PartenairesModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenairesModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
