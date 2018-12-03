import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from "@angular/animations";

export type NotificationSettingsType = {
  showNotification: boolean,
  notificationType: 'danger' | 'success',
  notificationMessage: string
}
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        animate('500ms', keyframes([
          style({opacity: 0}),
          style({opacity: 1})
        ]))
      ]),
      transition(':leave', [
        animate('500ms', keyframes([
          style({opacity: 1}),
          style({opacity: 0})
        ]))
      ]),
    ])
  ],
})
export class NotificationComponent implements OnInit {

  @Input() settings: NotificationSettingsType = {
    showNotification: false,
    notificationType: null,
    notificationMessage: null
  };

  constructor() { }

  ngOnInit() {
  }

}
