import { Injectable } from "@angular/core";
import * as introJs from "intro.js";
import { ConfiguracaoService } from "./configuracao.service";
import { Intro } from "./intro";

@Injectable()
export class IntroService {
    constructor(private configuracaoService: ConfiguracaoService) { }

    show(configId: string) {
        this.getIntroById(configId).start();
    }

    private getIntroById(configId: string) {
        let introConfig: Intro = this.getConfigs().filter(config => config.id === configId)[0];
        return introJs()
            .setOptions(introConfig.options)
            //.onbeforechange(introConfig.onBeforeChange)
            .onexit(introConfig.onExit);
    }

    private getConfigs(): Intro[] {

        return [
            new Intro(
                "CADASTRAR_BARBEARIA",
                {
                    showStepNumbers: false,
                    steps: [
                        {
                            //element: '#cadastroBarbearia',
                            intro: "<center>Cadstre sua Barbearia para que seus clientes possam encontrá-lo!</center>",
                            position: "right",
                        }
                    ],
                    showProgress: false,
                    //skipLabel: "Sair",
                    doneLabel: "Concluído",
                    nextLabel: "Próximo",
                    prevLabel: "Anterior",
                    overlayOpacity: "0.9",
                    //tooltipClass: "tooltip-medium"
                },
                () => { },
                () => { /*this.configuracaoService.save('CADASTRAR_BARBEARIA').subscribe()*/ },
            )
        ]
    }
}