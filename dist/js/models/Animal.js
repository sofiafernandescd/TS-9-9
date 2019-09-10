"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(_birth, _type) {
        this._birth = _birth;
        this._type = _type;
    }
    Object.defineProperty(Animal.prototype, "birth", {
        get: function () {
            return this._birth.toDateString();
        },
        set: function (birth) {
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.getType = function () {
        return this._type;
    };
    Animal.prototype.setType = function (type) {
    };
    return Animal;
}());
exports.Animal = Animal;
;
