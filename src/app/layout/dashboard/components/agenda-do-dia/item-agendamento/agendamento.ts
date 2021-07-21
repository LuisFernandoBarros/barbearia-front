export class Agendamento {
    id: number;
    expediente: string;
    nome: string;
    servico: string;
    valor: number;
    telefone: string;

    constructor(id: number, expediente: string, nome: string, servico: string, valor: number, telefone: string){
        this.id = id;
        this.expediente = expediente;
        this.nome = nome;
        this.servico = servico;
        this.valor = valor;
        this.telefone = telefone;
    }
}