import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone2AjoutComponent } from './zone2-ajout.component';

describe('Zone2AjoutComponent', () => {
  let component: Zone2AjoutComponent;
  let fixture: ComponentFixture<Zone2AjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone2AjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone2AjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
