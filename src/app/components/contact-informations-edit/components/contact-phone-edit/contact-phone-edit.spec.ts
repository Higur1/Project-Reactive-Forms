import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPhoneEdit } from './contact-phone-edit';

describe('ContactPhoneEdit', () => {
  let component: ContactPhoneEdit;
  let fixture: ComponentFixture<ContactPhoneEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactPhoneEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPhoneEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
