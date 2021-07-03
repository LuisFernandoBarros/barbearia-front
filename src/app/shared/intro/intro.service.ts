import { Injectable } from "@angular/core";
import * as introJs from "intro.js";
import { Intro } from "./intro";

@Injectable()
export class IntroService {
    constructor() { }

    show() {
        this.getIntroById().start();
    }

    private getIntroById() {
        let introConfig: Intro = this.getConfigs();

        return introJs()
            .setOptions(introConfig.options)
            //.onbeforechange(introConfig.onBeforeChange)
            .onexit(introConfig.onExit);
    }

    private getConfigs(): Intro {

        return new Intro(
            "2",
            {
                showStepNumbers: false,
                steps: [
                    {
                        intro: "<center><b>Seja bem-vindo ao Barber Agenda!</center>"
                    },
                    {
                        element: '#agenda',
                        intro: "<center>Esta é sua agenda. Aqui aparecerão os clientes que agendarem horários.</center>",
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
            () => { },
        )
    }
}