import { TestBed } from '@angular/core/testing';

import { ProductGeneratorService } from './product-generator.service';

describe('ProductGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductGeneratorService = TestBed.get(ProductGeneratorService);
    expect(service).toBeTruthy();
  });
});
