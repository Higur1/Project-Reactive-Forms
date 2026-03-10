import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogConfirmationData } from '../../interfaces/dialog-confirmation-data.interface';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: false,
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
})
export class ConfirmationDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogConfirmationData) { }
}
