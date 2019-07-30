import { TestBed } from '@angular/core/testing';

import { SetPageServiceService } from './set-page-service.service';

describe('SetPageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetPageServiceService = TestBed.get(SetPageServiceService);
    expect(service).toBeTruthy();
  });
});
