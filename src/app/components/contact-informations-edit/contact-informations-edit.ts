import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-informations-edit',
  standalone: false,
  templateUrl: './contact-informations-edit.html',
  styleUrl: './contact-informations-edit.scss',
})
export class ContactInformationsEdit {
  @Input({ required: true }) userForm!: FormGroup;
}
