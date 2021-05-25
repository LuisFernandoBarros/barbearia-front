import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Agendamento } from '../item-agendamento/agendamento';

@Injectable({
    providedIn: 'root'
})
export class AgendaDoDiaService {

    constructor(private http: HttpClient) {

    }

    private agendamentosUrl = 'http://localhost:8080/agendamentos/data=';

    public agendamentos: Array<Agendamento> = [];

    formataStringData(data: string): string {
        var dia = data.split("/")[0];
        var mes = data.split("/")[1];
        var ano = data.split("/")[2];

        return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
    };

    getAgendamentosDia() {
        this.agendamentosUrl += this.formataStringData("17/08/2021");
        return this.http.get<Agendamento[]>(this.agendamentosUrl);

    }


}