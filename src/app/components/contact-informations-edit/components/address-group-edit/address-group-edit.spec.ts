import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressGroupEdit } from './address-group-edit';

describe('AddressGroupEdit', () => {
  let component: AddressGroupEdit;
  let fixture: ComponentFixture<AddressGroupEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressGroupEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressGroupEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
