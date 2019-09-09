import {iClient} from "./iClient";
export class Client implements iClient{
    public idUser: number;
    public name: string;
    public surname?: string;
    public date?: Date;
    public isAdmin: boolean;
//podemos passar os de cima como public no construtor e elimina los de cima
    constructor(idUser: number, name: string, surname?:string, date?: Date) {
        this.idUser=idUser;
        this.name=name;
        this.surname=surname;
        this.date=date;
        this.isAdmin=false;
    }

    getData(): string {
        var dados = `Hola, soy ${this.name} ${this.surname} (ID: ${this.idUser})`
        return dados;
    }

    printData(): void {
        console.log(this.getData());
       /* if(date==undefined) {
            console.log('Não há data');
        } else {
            console.log(date.toDateString());
        };*/
        
    }

    getIsAdmin(): boolean {
        return this.isAdmin;
    }
    setIsAdmin(isAdmin: boolean): void {
        
    }
    getIdUser(): number{
        return this.idUser;
    }
    setIdUser(idUser: number): void {
        
    }
};