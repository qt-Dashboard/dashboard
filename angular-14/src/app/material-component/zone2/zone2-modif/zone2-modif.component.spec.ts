import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone2ModifComponent } from './zone2-modif.component';

describe('Zone2ModifComponent', () => {
  let component: Zone2ModifComponent;
  let fixture: ComponentFixture<Zone2ModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone2ModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone2ModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
