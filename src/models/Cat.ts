import { Animal } from "./Animal";
import { iPet } from "./iPet";

export class Cat extends Animal implements iPet {
    name: string;
    
    constructor (birth: Date, type: string, name: string) {
        super(birth, type);
        this.name=name;
    }
    greet(): string  {
        return "Miau Miau";
    }

    
};