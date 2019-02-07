import { TestBed } from '@angular/core/testing';

import { NgxPanelsService } from './ngx-panels.service';

describe('NgxPanelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPanelsService = TestBed.get(NgxPanelsService);
    expect(service).toBeTruthy();
  });
});
