import { TestBed } from '@angular/core/testing';

import { WinService } from './win.service';

describe('WinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WinService = TestBed.get(WinService);
    expect(service).toBeTruthy();
  });
});
