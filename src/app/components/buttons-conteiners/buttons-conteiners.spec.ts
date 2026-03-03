import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsConteiners } from './buttons-conteiners';

describe('ButtonsConteiners', () => {
  let component: ButtonsConteiners;
  let fixture: ComponentFixture<ButtonsConteiners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsConteiners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsConteiners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
