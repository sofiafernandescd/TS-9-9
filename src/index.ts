import {Person} from './models/person';
import {Client} from './models/Client';
import {ISAdmin} from './models/ISAdmin';
function sayHello(): void {
    console.log('Hello');
}

var person1 = new Person('Jane', 'Doe');
var greet = person1.greet();


//Pratica 1
var idUser = 5;
var name = 'John';
var surname = 'Yau';
var date = new Date();
var isAdmin = false;
const client = {
    idUser: idUser,
    name: name,
    surname: surname,
    date: date,
    isAdmin: isAdmin
};
console.dir(client);

//Pratica 2 - muda no objeto
name = 'Sofia';
console.dir(name);
console.dir(client.name);
/*Object.freeze(client);
try {
    client.name = 'John';
} catch(e) {

}*/


//Pratica 3 - muda no objeto
console.log('date.toDateString(): ',date.toDateString());
date.setFullYear(2017,4,12);
console.log('date.toDateString(): ',date.toDateString());
console.log('client.date.toDateString(): ',client.date.toDateString());
console.log('Cliente: ',client);

//Pratica 4
client.pets = [];
client.pets.name = 'Toze';
console.log('Cliente: ',client);

//Pratica 5
function optionalParam (param1?: any, param2?: any): string {
    if(param1==undefined && param2==undefined) {
        var greet = 'Hola';
        console.log(greet);
        //console.log(param2==null); true
        //console.log(param2==undefined); true
    } else if(param2==undefined){
        var greet ='Hola '+param1;
        console.log(greet);
    } else {
        var greet ='Hola '+param1+' e ';+param2;
        console.log(greet);
    }
    return greet;
}
function param2(personName?: string): string {
    
    var greet = `Hola ${personName ? personName : 'world'}!`;
    console.log(greet);
    return greet;
}

// optionalParam();
// optionalParam(1,2,3);
// optionalParam(1);
// optionalParam(1,2);
param2();
param2('John');

//Pratica 6
var cliente1 = new Client(74, 'Joao', 'Neves', new Date());
cliente1.printData();
console.log(cliente1.getIsAdmin());

//Pratica 7
var admin1 = new ISAdmin(1, 74, 'Carla', 'Gomes', new Date());
admin1.printData();
console.log(admin1.getIsAdmin());
