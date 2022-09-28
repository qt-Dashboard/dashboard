import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone3AjoutComponent } from './zone3-ajout.component';

describe('Zone3AjoutComponent', () => {
  let component: Zone3AjoutComponent;
  let fixture: ComponentFixture<Zone3AjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone3AjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone3AjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
