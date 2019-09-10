"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(birth, type, name) {
        var _this = _super.call(this, birth, type) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.greet = function () {
        return "Miau Miau";
    };
    return Cat;
}(Animal_1.Animal));
exports.Cat = Cat;
;
