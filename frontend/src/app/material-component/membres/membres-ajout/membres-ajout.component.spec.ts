import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresAjoutComponent } from './membres-ajout.component';

describe('MembresAjoutComponent', () => {
  let component: MembresAjoutComponent;
  let fixture: ComponentFixture<MembresAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
