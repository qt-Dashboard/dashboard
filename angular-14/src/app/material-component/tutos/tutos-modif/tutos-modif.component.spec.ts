import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutosModifComponent } from './tutos-modif.component';

describe('TutosModifComponent', () => {
  let component: TutosModifComponent;
  let fixture: ComponentFixture<TutosModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutosModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutosModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
