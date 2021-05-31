export class Agendamento {
    horario: string;
    nome: string;
    servico: string;
    valor: number;
    telefone: string;

    constructor(horario: string, nome: string, servico: string, valor: number, telefone: string){
        this.horario = horario;
        this.nome = nome;
        this.servico = servico;
        this.valor = valor;
        this.telefone = telefone;
    }
}