import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsAddEditComponent } from './documents-add-edit.component';

describe('DocumentsAddEditComponent', () => {
  let component: DocumentsAddEditComponent;
  let fixture: ComponentFixture<DocumentsAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsAddEditComponent]
    });
    fixture = TestBed.createComponent(DocumentsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
