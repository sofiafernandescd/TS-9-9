export class Person {
    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name=name;
        this.surname=surname;
    }
    public greet(): string {
        return 'Hello! My name is '+this.name;
    }
}