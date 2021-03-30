import { TestBed } from '@angular/core/testing';

import { TableQueryService } from './table-query.service';

describe('TableQueryService', () => {
  let service: TableQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
