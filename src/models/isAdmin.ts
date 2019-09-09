import { Client } from "./Client";

export class ISAdmin extends Client {
    private idAdmin: number;
//podemos passar os de cima como public no construtor e elimina los de cima
    constructor (idAdmin: number, idUser: number, name: string, surname?: string, date?: Date) {
        super(idUser, name, surname, date);
        this.isAdmin=true;
        this.idAdmin=idAdmin;
    }

    getData(): string {
        var dados = `Tengo el ID de Administrador: ${this.idAdmin}`
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