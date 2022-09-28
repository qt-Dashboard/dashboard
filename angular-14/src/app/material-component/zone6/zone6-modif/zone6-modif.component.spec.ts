import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone6ModifComponent } from './zone6-modif.component';

describe('Zone6ModifComponent', () => {
  let component: Zone6ModifComponent;
  let fixture: ComponentFixture<Zone6ModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone6ModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone6ModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
