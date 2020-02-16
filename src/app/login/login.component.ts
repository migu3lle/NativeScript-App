import {Component, OnInit } from '@angular/core';
import { Login } from '@src/app/shared/model/login.model';
import { Router } from '@angular/router';
import { FormUtilityService } from '@src/app/shared/services/form-utility.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Login';

  private login: Login;
  public showHideIcon = String.fromCharCode(0xf070);
  private showPassword: boolean;
  private liveValidation = {'email': false, 'password': false};

  constructor(private router: Router, private fus: FormUtilityService) {
    this.login = new Login('', '');
  }

  ngOnInit() {
    this.showPassword = false;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  focusLost(fieldName: string) {
    if (_.has(this.liveValidation, fieldName) && !_.isNil(this.login[fieldName])) {
      if (!_.isNil(this.login[fieldName]['error']) && !_.isNil(this.login[fieldName]['text'])) {
        this.liveValidation[fieldName] = true;
        this.login[fieldName].error = this.fus.getError(fieldName, this.login[fieldName].text);
      }
    }
  }

  hasError(fieldName: string) {
    if (_.has(this.liveValidation, fieldName) && this.liveValidation[fieldName]) {
      return this.fus.hasError(fieldName, this.login[fieldName]);
    }
  }

  isSubmitEnabled() {
    return !this.fus.hasError('email', this.login.email) &&
        !this.fus.hasError('password', this.login.password);
  }

  onSubmit() {
    console.log('Submitting form...');
    // TODO
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
