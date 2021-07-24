export class Agendamento {
    id: number;
    expediente: string;
    nome: string;
    servico: string;
    valor: number;
    telefone: string;
    atendidoEm: string;
    ativo: boolean;

    constructor(id: number, expediente: string, nome: string, servico: string, valor: number, telefone: string, atendidoEm: string,
        ativo: boolean){
        this.id = id;
        this.expediente = expediente;
        this.nome = nome;
        this.servico = servico;
        this.valor = valor;
        this.telefone = telefone;
        this.ativo = ativo;
        this.atendidoEm = atendidoEm;
    }
}