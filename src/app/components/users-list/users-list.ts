import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  userSelectedIndex: number | undefined;

  @Input() usersList?: UsersListResponse; 
  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>();

  onUserSelected(userIndex: number) {
    this.userSelectedIndex = userIndex;
    this.onUserSelectedEmitt.emit(userIndex);
  }
}
