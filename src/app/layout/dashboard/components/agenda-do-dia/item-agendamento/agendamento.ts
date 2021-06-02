export class Agendamento {
    id: number;
    horario: string;
    nome: string;
    servico: string;
    valor: number;
    telefone: string;

    constructor(id: number, horario: string, nome: string, servico: string, valor: number, telefone: string){
        this.id = id;
        this.horario = horario;
        this.nome = nome;
        this.servico = servico;
        this.valor = valor;
        this.telefone = telefone;
    }
}