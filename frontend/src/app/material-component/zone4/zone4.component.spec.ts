import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone4Component } from './zone4.component';

describe('Zone4Component', () => {
  let component: Zone4Component;
  let fixture: ComponentFixture<Zone4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
