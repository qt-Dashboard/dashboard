import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone1AjoutComponent } from './zone1-ajout.component';

describe('Zone1AjoutComponent', () => {
  let component: Zone1AjoutComponent;
  let fixture: ComponentFixture<Zone1AjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone1AjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone1AjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
