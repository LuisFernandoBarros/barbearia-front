export class Profissional {
    id: number;
    nome: string;
    email: string;
    isDono: boolean;    
    senha: string;
    constructor(id: number, nome: string, email: string, isDono: boolean, senha: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.isDono = isDono;
        this.senha = senha;
    }
}