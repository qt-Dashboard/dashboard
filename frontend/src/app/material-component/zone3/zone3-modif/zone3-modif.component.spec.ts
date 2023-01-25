import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone3ModifComponent } from './zone3-modif.component';

describe('Zone3ModifComponent', () => {
  let component: Zone3ModifComponent;
  let fixture: ComponentFixture<Zone3ModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone3ModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone3ModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
