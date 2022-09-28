import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone4ModifComponent } from './zone4-modif.component';

describe('Zone4ModifComponent', () => {
  let component: Zone4ModifComponent;
  let fixture: ComponentFixture<Zone4ModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone4ModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zone4ModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
