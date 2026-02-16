import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-general-informations',
  standalone: false,
  templateUrl: './general-informations.html',
  styleUrl: './general-informations.scss',
})
export class GeneralInformations {
  @Input({ required:true }) user: IUser | undefined = {} as IUser;
}
