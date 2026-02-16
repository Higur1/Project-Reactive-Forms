import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPhoneList } from './contact-phone-list';

describe('ContactPhoneList', () => {
  let component: ContactPhoneList;
  let fixture: ComponentFixture<ContactPhoneList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactPhoneList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPhoneList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
