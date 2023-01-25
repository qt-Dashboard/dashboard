import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone4AjoutComponent } from './zone4-ajout.component';

describe('Zone4AjoutComponent', () => {
  let component: Zone4AjoutComponent;
  let fixture: ComponentFixture<Zone4AjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone4AjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone4AjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
