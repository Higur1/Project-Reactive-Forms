import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-item',
  standalone: false,
  templateUrl: './user-info-item.html',
  styleUrl: './user-info-item.scss',
})
export class UserInfoItem {
  @Input() title: string | undefined | null= '';
  @Input() text: string | undefined | null = '';
}
