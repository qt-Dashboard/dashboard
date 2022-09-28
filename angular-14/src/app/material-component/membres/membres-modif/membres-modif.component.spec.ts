import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresModifComponent } from './membres-modif.component';

describe('MembresModifComponent', () => {
  let component: MembresModifComponent;
  let fixture: ComponentFixture<MembresModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
