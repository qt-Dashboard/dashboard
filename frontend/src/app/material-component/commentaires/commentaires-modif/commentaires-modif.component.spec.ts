import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentairesModifComponent } from './commentaires-modif.component';

describe('CommentairesModifComponent', () => {
  let component: CommentairesModifComponent;
  let fixture: ComponentFixture<CommentairesModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentairesModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentairesModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
