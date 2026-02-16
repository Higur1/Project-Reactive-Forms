import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressGroup } from './address-group';

describe('AddressGroup', () => {
  let component: AddressGroup;
  let fixture: ComponentFixture<AddressGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
