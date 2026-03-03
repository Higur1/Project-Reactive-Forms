import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDependentsListEdit } from './user-dependents-list-edit';

describe('UserDependentsListEdit', () => {
  let component: UserDependentsListEdit;
  let fixture: ComponentFixture<UserDependentsListEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDependentsListEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDependentsListEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
