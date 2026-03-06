import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-dependents-list-edit',
  standalone: false,
  templateUrl: './user-dependents-list-edit.html',
  styleUrl: './user-dependents-list-edit.scss',
})
export class UserDependentsListEdit {
  @Input({ required: true }) userForm!: FormGroup;

  @Output('onAddDependent') onAddDependentEmitt = new EventEmitter<void>();
  @Output('onRemoveDependent') onRemoveDependentEmitt = new EventEmitter<number>();

  get dependentList(): FormArray {
    return this.userForm.get('dependentsList') as FormArray;
  }

  removeDependent(dependentIndex: number) {
    this.onRemoveDependentEmitt.emit(dependentIndex);
  }

  addDependent() {
    this.onAddDependentEmitt.emit();
  }
}
