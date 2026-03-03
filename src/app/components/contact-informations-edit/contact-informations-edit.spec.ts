import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationsEdit } from './contact-informations-edit';

describe('ContactInformationsEdit', () => {
  let component: ContactInformationsEdit;
  let fixture: ComponentFixture<ContactInformationsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactInformationsEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformationsEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
