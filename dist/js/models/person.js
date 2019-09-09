"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.greet = function () {
        return 'Hello! My name is ' + this.name;
    };
    return Person;
}());
exports.Person = Person;
