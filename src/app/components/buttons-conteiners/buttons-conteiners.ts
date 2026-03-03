import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-conteiners',
  standalone: false,
  templateUrl: './buttons-conteiners.html',
  styleUrl: './buttons-conteiners.scss',
})
export class ButtonsConteiners {

  @Input({ required: true }) isInEditMode: boolean = false;
  @Output('onEditButton') onEditButtonEmitt = new EventEmitter<void>()
  @Output('onCancelButton') onCancelButtonEmitt = new EventEmitter<void>()

  onEditButton() {
    this.onEditButtonEmitt.emit();
  }
  onCancelButton() {
    this.onCancelButtonEmitt.emit();
  }
}
