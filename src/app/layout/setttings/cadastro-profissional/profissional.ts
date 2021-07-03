import { ConfiguracaoProfissional } from "../../../shared/configuracao-profissional";
import { Horario } from "../cadastro-agenda/component/agenda-config/horario";

export class Profissional {
    id: number;
    nome: string;
    email: string;
    isDono: boolean;    
    senha: string;
    telefone: string;
    horarios: Array<Horario>;
    configuracoesProfissional: Array<ConfiguracaoProfissional>;
    constructor(id: number, nome: string, email: string, isDono: boolean, senha: string, telefone: string, horarios: Array<Horario>) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.isDono = isDono;
        this.senha = senha;
        this.telefone = telefone;
        this.horarios = horarios;
    }
}