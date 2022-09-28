import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTutosModifComponent } from './cat-tutos-modif.component';

describe('CatTutosModifComponent', () => {
  let component: CatTutosModifComponent;
  let fixture: ComponentFixture<CatTutosModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatTutosModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatTutosModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
