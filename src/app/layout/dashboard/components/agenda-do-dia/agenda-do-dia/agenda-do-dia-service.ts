import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Agendamento } from '../item-agendamento/agendamento';

@Injectable({ providedIn: 'root' })
export class AgendaDoDiaService {

    constructor(private httpClient: HttpClient) { }

    private agendamentosUrl = 'http://localhost:8080/agendamentos';

    public agendamentos: Array<Observable<Agendamento>> = [];

    getAgendamentosDia(data: string) {        
        return this.httpClient.get<Agendamento[]>(this.agendamentosUrl + "/" + data);
    }
}