"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = /** @class */ (function () {
    //podemos passar os de cima como public no construtor e elimina los de cima
    function Client(idUser, name, surname, date) {
        this.idUser = idUser;
        this.name = name;
        this.surname = surname;
        this.date = date;
        this.isAdmin = false;
    }
    Client.prototype.getData = function () {
        var dados = "Hola, soy " + this.name + " " + this.surname + " (ID: " + this.idUser + ")";
        return dados;
    };
    Client.prototype.printData = function () {
        console.log(this.getData());
        /* if(date==undefined) {
             console.log('Não há data');
         } else {
             console.log(date.toDateString());
         };*/
    };
    Client.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    Client.prototype.setIsAdmin = function (isAdmin) {
    };
    Client.prototype.getIdUser = function () {
        return this.idUser;
    };
    Client.prototype.setIdUser = function (idUser) {
    };
    return Client;
}());
exports.Client = Client;
;
