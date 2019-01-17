import { TestBed } from '@angular/core/testing';

import { CardDataServiceService } from './card-data-service.service';

describe('CardDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardDataServiceService = TestBed.get(CardDataServiceService);
    expect(service).toBeTruthy();
  });
});
