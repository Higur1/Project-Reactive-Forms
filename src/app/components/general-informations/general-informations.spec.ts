import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformations } from './general-informations';

describe('GeneralInformations', () => {
  let component: GeneralInformations;
  let fixture: ComponentFixture<GeneralInformations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInformations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInformations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
