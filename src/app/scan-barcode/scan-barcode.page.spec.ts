import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanBarcodePage } from './scan-barcode.page';

describe('ScanBarcodePage', () => {
  let component: ScanBarcodePage;
  let fixture: ComponentFixture<ScanBarcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanBarcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanBarcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
