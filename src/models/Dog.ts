import { Animal } from "./Animal";
import { iPet } from "./iPet";

export class Dog extends Animal implements iPet {
    name: string;
    
    constructor (_birth: Date, _type: string, name: string) {
        super(_birth, _type);
        this.name=name;
    }

    greet(): string  {
        return "Au Au Au";
    }

};