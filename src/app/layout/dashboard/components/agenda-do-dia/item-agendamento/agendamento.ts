import { Servico } from "./servico";

export class Agendamento {
    dataHora: string;
    nome: string;
    servicos: Array<Servico>;    
    telefone: string;

    constructor(dataHora: string, nome: string, servicos: Array<Servico>, telefone: string){
        this.dataHora = dataHora;
        this.nome = nome;
        this.servicos = servicos;
        this.telefone = telefone;
    }
}