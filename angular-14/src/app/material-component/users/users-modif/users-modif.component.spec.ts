import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersModifComponent } from './users-modif.component';

describe('UsersModifComponent', () => {
  let component: UsersModifComponent;
  let fixture: ComponentFixture<UsersModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
