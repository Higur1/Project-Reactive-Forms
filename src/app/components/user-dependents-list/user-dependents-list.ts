import { Component, Input } from '@angular/core';
import { DependentsList } from '../../types/dependents-list';

@Component({
  selector: 'app-user-dependents-list',
  standalone: false,
  templateUrl: './user-dependents-list.html',
  styleUrl: './user-dependents-list.scss',
})
export class UserDependentsList {
  @Input({ required: true}) dependentsList: DependentsList | undefined = [];
}
