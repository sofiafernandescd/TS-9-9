
export class Animal {
    private _birth: Date;
    private _type: string;

    constructor (_birth: Date, _type: string) {
        this._birth=_birth;
        this._type=_type;
    }

    get birth(): string {
        return  this._birth.toDateString();
    }

    set birth(birth: string) {
    }
    
    getType(): string{
        return this._type;
    }
    setType(type: string): void {
    }
};