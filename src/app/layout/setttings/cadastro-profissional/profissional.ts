import { ConfiguracaoProfissional } from "../../../shared/configuracao-profissional";
import { Expediente } from "../cadastro-agenda/component/agenda-config/expediente";

export class Profissional {
    id: number;
    nome: string;
    email: string;
    isDono: boolean;    
    senha: string;
    telefone: string;
    expedientes: Array<Expediente>;
    configuracoesProfissional: Array<ConfiguracaoProfissional>;
    constructor(id: number, nome: string, email: string, isDono: boolean, senha: string, telefone: string, expedientes: Array<Expediente>) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.isDono = isDono;
        this.senha = senha;
        this.telefone = telefone;
        this.expedientes = expedientes;
    }
}