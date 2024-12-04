import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';

describe('CityserviceService', () => {
  let service: CitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
