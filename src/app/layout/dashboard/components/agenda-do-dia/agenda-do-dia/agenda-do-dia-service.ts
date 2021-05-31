import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Agendamento } from '../item-agendamento/agendamento';

@Injectable({ providedIn: 'root' })
export class AgendaDoDiaService {

    constructor(private httpClient: HttpClient) { }

    private agendamentosUrl = 'http://localhost:8080/agendamentos/2021-10-10';

    public agendamentos: Array<Observable<Agendamento>> = [];

    getAgendamentosDia() {
        return this.httpClient.get<Agendamento[]>(this.agendamentosUrl);
    }
}