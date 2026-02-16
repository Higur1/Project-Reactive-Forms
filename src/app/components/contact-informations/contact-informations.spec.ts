import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformations } from './contact-informations';

describe('ContactInformations', () => {
  let component: ContactInformations;
  let fixture: ComponentFixture<ContactInformations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactInformations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
