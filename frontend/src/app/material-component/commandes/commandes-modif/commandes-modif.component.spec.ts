import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesModifComponent } from './commandes-modif.component';

describe('CommandesModifComponent', () => {
  let component: CommandesModifComponent;
  let fixture: ComponentFixture<CommandesModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
