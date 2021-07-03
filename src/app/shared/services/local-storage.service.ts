import { Injectable } from "@angular/core";
import { Profissional } from "../../layout/setttings/cadastro-profissional/profissional";
import { ConfiguracaoProfissional } from "../configuracao-profissional";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {


    constructor() { }

    setProfissional(profissional: Profissional) {
        localStorage.setItem("intro", this.getconfiguracaoProfissional(profissional.configuracoesProfissional))
    }

    private getconfiguracaoProfissional(configuracoes: Array<ConfiguracaoProfissional>): string {
        let configuracao = configuracoes.find(it => it.vistoEm == null);
        return configuracao.configuracao;
    }
}