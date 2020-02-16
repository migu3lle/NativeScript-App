import {Component, OnInit } from '@angular/core';
import { Register } from '@src/app/shared/model/register.model';
import { Router } from '@angular/router';
import {FormUtilityService} from '@src/app/shared/services/form-utility.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  title = 'Register';

  private register: Register;
  public showHideIcon = String.fromCharCode(0xf070);
  private showPassword: boolean;
  private liveValidation = {'firstname': false, 'lastname': false, 'email': false, 'password': false};

  constructor(private router: Router, private fus: FormUtilityService) {
    this.register = new Register('', '', '', '');
  }

  ngOnInit() {
    this.showPassword = false;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  focusLost(fieldName: string) {
    if (_.has(this.liveValidation, fieldName) && !_.isNil(this.register[fieldName])) {
      if (!_.isNil(this.register[fieldName]['error']) && !_.isNil(this.register[fieldName]['text'])) {
        this.liveValidation[fieldName] = true;
        this.register[fieldName].error = this.fus.getError(fieldName, this.register[fieldName].text);
      }
    }
  }

  hasError(fieldName: string) {
    if (_.has(this.liveValidation, fieldName) && this.liveValidation[fieldName]) {
      return this.fus.hasError(fieldName, this.register[fieldName]);
    }
  }

  isSubmitEnabled() {
    return !this.fus.hasError('email', this.register.email) &&
        !this.fus.hasError('password', this.register.password) &&
        !this.fus.hasError('firstname', this.register.firstname) &&
        !this.fus.hasError('lastname', this.register.lastname);
  }

  onSubmit() {
    console.log('Submitting form...');
    // TODO
  }

  onCancel() {
    this.router.navigate(['/login']);
  }
}
