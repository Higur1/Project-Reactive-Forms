import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { IUser } from './interfaces/user/user.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  usersList$!: Observable<UsersListResponse>;

  userSelectedIndex: number | undefined;
  userSelected: IUser | undefined;

  isInEditMode: boolean = false;
  enableSaveButton: boolean = false;
  userFormUpdated: boolean = false;

  constructor(
    private readonly _usersService: UsersService,
    private readonly _matDialog: MatDialog,
    private readonly _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.usersList$ = this._usersService.getUsers();
  }

  onUserSelected(userIndex: number, usersList: UsersListResponse) {
    const userFound = usersList[userIndex];

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
    }
  }

  onCancelButton() {
    if (!this.userFormUpdated) {
      this.isInEditMode = false;
      return;
    }

    const dialogRef = this._matDialog.open(ConfirmationDialog, {
      data: {
        title: 'The form has been changed.',
        message: 'Do you really want to cancel the changes made to the form?'
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this.isInEditMode = false;
      this.userFormUpdated = false;

      this._cdr.detectChanges();
    });
  }

  onEditButton() {
    this.isInEditMode = true;
  }

  onFormStatusChange(formStatus: boolean) {
    setTimeout(() => this.enableSaveButton = formStatus, 0);
  }

  onFormatFirstChange() {
    this.userFormUpdated = true;
  }
}
