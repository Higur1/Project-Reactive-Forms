import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationsEdit } from './general-informations-edit';

describe('GeneralInformationsEdit', () => {
  let component: GeneralInformationsEdit;
  let fixture: ComponentFixture<GeneralInformationsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInformationsEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInformationsEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
