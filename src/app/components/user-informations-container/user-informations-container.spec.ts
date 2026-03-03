import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationsContainer } from './user-informations-container';

describe('UserInformationsContainer', () => {
  let component: UserInformationsContainer;
  let fixture: ComponentFixture<UserInformationsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInformationsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
