export class AgendamentoAgendado {
    data: string;
    horario: string;
    nomeCliente: string;
    nomeProfissonal: string;
    servico: string;
    telefone: string;
    valor: number;

    constructor(data: string, horario: string, nomeCliente: string, nomeProfissonal: string, servico: string, telefone: string, valor: number) {
        this.data = data;
        this.horario = horario;
        this.nomeCliente = nomeCliente;
        this.nomeProfissonal = nomeProfissonal;
        this.servico = servico;
        this.telefone = telefone;
        this.valor = valor;
    }
}