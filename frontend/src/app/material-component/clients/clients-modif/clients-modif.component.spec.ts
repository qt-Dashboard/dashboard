import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsModifComponent } from './clients-modif.component';

describe('ClientsModifComponent', () => {
  let component: ClientsModifComponent;
  let fixture: ComponentFixture<ClientsModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
