export class Email {
    private _text: string;
    private _error: string;
    private _label: string;
    private _placeholder: string;

    constructor(emailText: string) {
        this._text = emailText;
        this._error = '';
        this._label = 'E-Mail';
        this._placeholder = 'e.g. user@mail.com';
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
