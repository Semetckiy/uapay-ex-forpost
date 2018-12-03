import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AgencyComponent implements OnInit {

  @Input() agency;

  title = 'Agency details';
  description = 'You can find here your agency details and edit them.';

  constructor() { }

  ngOnInit() { }

}
