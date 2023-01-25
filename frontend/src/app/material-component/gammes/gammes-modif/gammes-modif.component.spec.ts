import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammesModifComponent } from './gammes-modif.component';

describe('GammesModifComponent', () => {
  let component: GammesModifComponent;
  let fixture: ComponentFixture<GammesModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GammesModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GammesModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
