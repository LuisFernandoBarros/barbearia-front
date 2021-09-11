import { ConfiguracaoProfissional } from "../../../shared/configuracao-profissional";
import { Expediente } from "../cadastro-agenda/component/agenda-config/expediente";
import { Servico } from "../cadastro-servicos/servico";

export class Profissional {
    id: number;
    nome: string;
    email: string;
    isDono: boolean;    
    senha: string;
    telefone: string;
    expedientes: Array<Expediente>;
    servicos: Array<Servico>
    configuracoesProfissional: Array<ConfiguracaoProfissional>;
    constructor(id: number, nome: string, email: string, isDono: boolean, senha: string, telefone: string, expedientes: Array<Expediente>,
        servicos: Array<Servico>) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.isDono = isDono;
        this.senha = senha;
        this.telefone = telefone;
        this.expedientes = expedientes;
        this.servicos = servicos;
    }
}