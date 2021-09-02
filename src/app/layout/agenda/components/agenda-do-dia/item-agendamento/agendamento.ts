export class Agendamento {
    id: number;
    profissional: string;
    nome: string;
    servico: string;
    valor: number;
    telefone: string;
    atendidoEm: string;
    ativo: boolean;
    dataHora: string

    constructor(id: number, profissional: string, nome: string, servico: string, valor: number, telefone: string, atendidoEm: string,
        ativo: boolean, dataHora: string){
        this.id = id;
        this.profissional = profissional;
        this.nome = nome;
        this.servico = servico;
        this.valor = valor;
        this.telefone = telefone;
        this.ativo = ativo;
        this.atendidoEm = atendidoEm;
        this.dataHora = dataHora;
    }
}