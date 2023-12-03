import { TestBed } from '@angular/core/testing';

import { WorkspacedetailsService } from './workspacedetails.service';

describe('WorkspacedetailsService', () => {
  let service: WorkspacedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspacedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
