import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesModifComponent } from './pages-modif.component';

describe('PagesModifComponent', () => {
  let component: PagesModifComponent;
  let fixture: ComponentFixture<PagesModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
