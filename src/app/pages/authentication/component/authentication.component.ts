import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { StoreService } from '../../../shared/store.service';


@Component({
  selector: 'app-root',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {

  formGroup: FormGroup;
  companyName = 'test';
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.createFormGroup();
  }

  private createFormGroup() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  private submit() {

    const credentials = {
      username: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value,
    };

    this.authenticationService.login(credentials)
      .then((responce) => {
        console.log('login response: ', responce);
        this.store.set('ticket', responce.ticket);
        this.router.navigate(['/device-rro']);
      });

  }

}
