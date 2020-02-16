import { Email } from '@src/app/shared/model/email.model';
import { Password } from '@src/app/shared/model/password.model';
import {Login} from '@src/app/shared/model/login.model';

export class Register extends Login {
    private _firstname: Firstname;
    private _lastname: Lastname;
    private _cancelBtnText: string;

    constructor(email: string, firstname: string, lastname: string, password: string) {
        super(email, password);
        this._firstname = new Firstname(firstname);
        this._lastname = new Lastname(lastname);
        this._cancelBtnText = 'Cancel';
    }

    get firstname(): Firstname {
        return this._firstname;
    }

    get lastname(): Lastname {
        return this._lastname;
    }

    get cancelBtnText(): string {
        return this._cancelBtnText;
    }
}

class Firstname {
    private _text: string;
    private _error: string;
    private _label: string;
    private _placeholder: string;

    constructor(text: string) {
        this._text = text;
        this._error = '';
        this._label = 'Firstname';
        this._placeholder = 'Firstname';
    }

    get text(): string {
        return this._text;
    }

    get error(): string {
        return this._error;
    }

    get label(): string {
        return this._label;
    }

    get placeholder(): string {
        return this._placeholder;
    }

    set text(value: string) {
        this._text = value;
    }

    set error(value: string) {
        this._error = value;
    }
}

class Lastname {
    private _text: string;
    private _error: string;
    private _label: string;
    private _placeholder: string;

    constructor(text: string) {
        this._text = text;
        this._error = '';
        this._label = 'Lastname';
        this._placeholder = 'Lastname';
    }

    get text(): string {
        return this._text;
    }

    get error(): string {
        return this._error;
    }

    get label(): string {
        return this._label;
    }

    get placeholder(): string {
        return this._placeholder;
    }
}
