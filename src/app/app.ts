import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { IUser } from './interfaces/user/user.interface';
import { Observable, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog';
import { IDialogConfirmationData } from './interfaces/dialog-confirmation-data.interface';
import { UpdateUserService } from './services/update-user-service';

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
    private readonly _cdr: ChangeDetectorRef,
    private readonly _updateUserService: UpdateUserService
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

  onEditButton() {
    this.isInEditMode = true;
  }

  onCancelButton() {
    if (!this.userFormUpdated) {
      this.isInEditMode = false;
      return;
    }

    this.openConfirmationDialog({
      title: 'The form has been changed.',
      message: 'Do you really want to cancel the changes made to the form?'
    },
      (value: boolean) => {
        if (!value) return;
        this.userFormUpdated = false;
        this.exitEditMode();
      }
    );
  }

  onSaveButton() {
    this.openConfirmationDialog({
      title: 'Confirm data change.',
      message: 'Do you really want to save the changed information?'
    },
      (value: boolean) => {
        if (!value) return;
        this.saveUserInfos();
        this.userFormUpdated = false;
        this.exitEditMode();
      }
    );
  }

  onFormStatusChange(formStatus: boolean) {
    setTimeout(() => this.enableSaveButton = formStatus, 0);
  }

  onFormatFirstChange() {
    this.userFormUpdated = true;
  }

  private exitEditMode(): void {
    this.isInEditMode = false;
    this._cdr.detectChanges();
  }

  private openConfirmationDialog(data: IDialogConfirmationData, callback: (value: boolean) => void) {
    this._matDialog.open(ConfirmationDialog, {
      data
    })
      .afterClosed()
      .subscribe(callback);
  }

  private saveUserInfos() {
    const newUser: IUser = this.convertUserFormToUser();

    this._updateUserService.updateUser(newUser).subscribe((newUserResponse: IUser) => {
      if (this.userSelectedIndex === undefined) return;

      this.usersList$.subscribe(response => {
        response[this.userSelectedIndex!] = newUserResponse;
      });
    });
  }

  private convertUserFormToUser(): IUser {
    return {} as IUser;
  }
}
