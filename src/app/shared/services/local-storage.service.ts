import { Injectable } from "@angular/core";
import { Profissional } from "../../layout/setttings/cadastro-profissional/profissional";
import { ConfiguracaoProfissional } from "../configuracao-profissional";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {


    constructor() { }

    setProfissional(profissional: Profissional) {
        this.setConfiguracoes(profissional.configuracoesProfissional);        
    }

    hasConfig(config: string): boolean {        
        return localStorage.getItem(config) != null
    }

    removeConfig(config: string){
        localStorage.removeItem(config);
    }

    private setConfiguracoes(configuracoes: Array<ConfiguracaoProfissional>){
        configuracoes.forEach(
            it => {
                if(it.vistoEm == null){
                    localStorage.setItem(it.configuracao, null)
                }
            }
        )
    }
}