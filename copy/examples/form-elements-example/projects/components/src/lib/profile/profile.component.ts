import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileComponent implements OnInit {

  @Input() profile;

  title = 'Profile details';
  description = 'You can find here your profile details and edit them.';

  constructor() { }

  ngOnInit() { }

}
