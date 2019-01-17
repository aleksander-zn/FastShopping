import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardChooserComponent } from './credit-card-chooser.component';

describe('CreditCardChooserComponent', () => {
  let component: CreditCardChooserComponent;
  let fixture: ComponentFixture<CreditCardChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
