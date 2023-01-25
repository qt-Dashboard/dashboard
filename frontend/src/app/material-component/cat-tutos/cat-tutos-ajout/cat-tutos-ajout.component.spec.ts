import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTutosAjoutComponent } from './cat-tutos-ajout.component';

describe('CatTutosAjoutComponent', () => {
  let component: CatTutosAjoutComponent;
  let fixture: ComponentFixture<CatTutosAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatTutosAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatTutosAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
