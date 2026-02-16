import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-contact-informations',
  standalone: false,
  templateUrl: './contact-informations.html',
  styleUrl: './contact-informations.scss',
})
export class ContactInformations {
  @Input({ required: true}) user: IUser | undefined = {} as IUser;
}
