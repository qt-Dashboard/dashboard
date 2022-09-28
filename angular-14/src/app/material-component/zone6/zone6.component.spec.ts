import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone6Component } from './zone6.component';

describe('Zone6Component', () => {
  let component: Zone6Component;
  let fixture: ComponentFixture<Zone6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
