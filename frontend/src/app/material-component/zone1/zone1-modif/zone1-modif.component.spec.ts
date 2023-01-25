import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone1ModifComponent } from './zone1-modif.component';

describe('Zone1ModifComponent', () => {
  let component: Zone1ModifComponent;
  let fixture: ComponentFixture<Zone1ModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone1ModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone1ModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
