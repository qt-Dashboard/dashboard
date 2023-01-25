import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAjoutComponent } from './clients-ajout.component';

describe('ClientsAjoutComponent', () => {
  let component: ClientsAjoutComponent;
  let fixture: ComponentFixture<ClientsAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
