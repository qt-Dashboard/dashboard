import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAjoutComponent } from './users-ajout.component';

describe('UsersAjoutComponent', () => {
  let component: UsersAjoutComponent;
  let fixture: ComponentFixture<UsersAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
