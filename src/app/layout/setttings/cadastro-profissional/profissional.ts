export class Profissional {
    id: number;
    nome: string;
    email: string;
    isDono: boolean;

    constructor(id: number, nome: string, email: string, isDono: boolean) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.isDono = isDono;
    }
}