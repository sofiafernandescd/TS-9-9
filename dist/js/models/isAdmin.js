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
var Client_1 = require("./Client");
var ISAdmin = /** @class */ (function (_super) {
    __extends(ISAdmin, _super);
    //podemos passar os de cima como public no construtor e elimina los de cima
    function ISAdmin(idAdmin, idUser, name, surname, date) {
        var _this = _super.call(this, idUser, name, surname, date) || this;
        _this.isAdmin = true;
        _this.idAdmin = idAdmin;
        return _this;
    }
    ISAdmin.prototype.getData = function () {
        var dados = "Tengo el ID de Administrador: " + this.idAdmin;
        return dados;
    };
    ISAdmin.prototype.printData = function () {
        console.log(this.getData());
        /* if(date==undefined) {
             console.log('Não há data');
         } else {
             console.log(date.toDateString());
         };*/
    };
    ISAdmin.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    ISAdmin.prototype.setIsAdmin = function (isAdmin) {
    };
    ISAdmin.prototype.getIdUser = function () {
        return this.idUser;
    };
    ISAdmin.prototype.setIdUser = function (idUser) {
    };
    return ISAdmin;
}(Client_1.Client));
exports.ISAdmin = ISAdmin;
;
