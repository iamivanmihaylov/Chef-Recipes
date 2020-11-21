import { TestBed } from '@angular/core/testing';

import { ChefQuotesService } from './chef-quotes.service';

describe('ChefQuotesService', () => {
  let service: ChefQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
