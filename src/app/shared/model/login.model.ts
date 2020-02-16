import { Email } from '@src/app/shared/model/email.model';
import { Password } from '@src/app/shared/model/password.model';

export class Login {
    _email: Email;
    _password: Password;
    private _loginBtnText: string;
    private _registerBtnText: string;

    constructor(email: string, password: string) {
        this._email = new Email(email);
        this._password = new Password(password);
        this._loginBtnText = 'Login';
        this._registerBtnText = 'Register';
    }

    get email(): Email {
        return this._email;
    }

    get password(): Password {
        return this._password;
    }

    get loginBtnText(): string {
        return this._loginBtnText;
    }

    get registerBtnText(): string {
        return this._registerBtnText;
    }
}
