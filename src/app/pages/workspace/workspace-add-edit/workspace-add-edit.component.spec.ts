import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceAddEditComponent } from './workspace-add-edit.component';

describe('WorkspaceAddEditComponent', () => {
  let component: WorkspaceAddEditComponent;
  let fixture: ComponentFixture<WorkspaceAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkspaceAddEditComponent]
    });
    fixture = TestBed.createComponent(WorkspaceAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
