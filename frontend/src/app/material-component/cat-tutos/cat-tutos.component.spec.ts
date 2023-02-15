import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTutosComponent } from './cat-tutos.component';

describe('CatTutosComponent', () => {
  let component: CatTutosComponent;
  let fixture: ComponentFixture<CatTutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatTutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatTutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
