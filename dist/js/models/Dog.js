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
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(_birth, _type, name) {
        var _this = _super.call(this, _birth, _type) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.greet = function () {
        return "Au Au Au";
    };
    return Dog;
}(Animal_1.Animal));
exports.Dog = Dog;
;
