import { Component, Input } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  @Input({ required: true }) usersList: UsersListResponse = [];
}
