import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDependentsList } from './user-dependents-list';

describe('UserDependentsList', () => {
  let component: UserDependentsList;
  let fixture: ComponentFixture<UserDependentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDependentsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDependentsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
