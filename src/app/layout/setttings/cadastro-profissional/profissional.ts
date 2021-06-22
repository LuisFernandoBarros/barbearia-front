export class Profissional {
    nome: string;
    email: string;
    isDono: boolean;
    
    constructor(nome: string, email: string, isDono: boolean){
        this.nome = nome;
        this.email = email;
        this.isDono = isDono;     
    }
}