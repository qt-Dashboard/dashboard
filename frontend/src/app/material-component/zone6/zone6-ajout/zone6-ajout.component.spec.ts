import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone6AjoutComponent } from './zone6-ajout.component';

describe('Zone6AjoutComponent', () => {
  let component: Zone6AjoutComponent;
  let fixture: ComponentFixture<Zone6AjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone6AjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone6AjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
