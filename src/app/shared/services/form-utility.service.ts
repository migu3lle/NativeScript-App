import { Injectable } from '@angular/core';
import * as _ from 'lodash';

// tslint:disable-next-line:max-line-length
const regex: any = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

@Injectable()
export class FormUtilityService {
  constructor() { }

  public isValidEmail(email: string) {
    if (email.length < 1) {
      return false;
    }
    return regex.test(email);
  }

  public isValidPassword(password: string) {
    if (password.length < 1) {
      return false;
    }
    return true;
  }

  hasError(fieldName: string, field: Object) {
    if (!_.isNil(field['error']) && !_.isNil(field['text'])) {
      if (null !== (field['error'] = this.getError(fieldName, field['text']))) {
        return true;
      }
    }
    return false;
  }

  getError(fieldName: string, text: string) {
    switch (fieldName) {
      case 'firstname':
        return this.getFirstnameError(text);
        break;
      case 'lastname':
        return this.getLastnameError(text);
        break;
      case 'email':
        return this.getEmailError(text);
        break;
      case 'password':
        return this.getPasswordError(text);
        break;
      default:
        return null;
    }
  }

  getEmailError(email: string) {
    if (email.length < 1) {
      return 'Please enter your e-mail';
    } else if (!regex.test(email)) {
      return 'Please enter a valid e-mail';
    }
    return null;
  }

  getPasswordError(password: string) {
    if (password.length < 1) {
      return 'Please enter your password';
    }
    return null;
  }

  getFirstnameError(firstname: string) {
    if (firstname.length < 1) {
      return 'Please enter your firstname';
    }
    return null;
  }

  getLastnameError(lastname: string) {
    if (lastname.length < 1) {
      return 'Please enter your lastname';
    }
    return null;
  }
}
