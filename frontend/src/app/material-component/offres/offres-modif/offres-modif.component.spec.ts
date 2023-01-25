import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresModifComponent } from './offres-modif.component';

describe('OffresModifComponent', () => {
  let component: OffresModifComponent;
  let fixture: ComponentFixture<OffresModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
