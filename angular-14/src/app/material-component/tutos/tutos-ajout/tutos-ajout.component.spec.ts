import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutosAjoutComponent } from './tutos-ajout.component';

describe('TutosAjoutComponent', () => {
  let component: TutosAjoutComponent;
  let fixture: ComponentFixture<TutosAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutosAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutosAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
