export class Password {
    private _text: string;
    private _error: string;
    private _label: string;

    constructor(passwordText: string) {
        this._text = passwordText;
        this._error = '';
        this._label = 'Password';
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

    set text(value: string) {
        this._text = value;
    }

    set error(value: string) {
        this._error = value;
    }
}
