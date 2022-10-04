import { TestBed } from '@angular/core/testing';

import { PopupMapService } from './popup-map.service';

describe('PopupMapService', () => {
  let service: PopupMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
