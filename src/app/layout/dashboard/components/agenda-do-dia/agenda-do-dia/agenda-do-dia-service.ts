import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment";
import { Agendamento } from '../item-agendamento/agendamento';

@Injectable({ providedIn: 'root' })
export class AgendaDoDiaService {

    constructor(private httpClient: HttpClient) { }

    private agendamentosUrl = `${environment.API}/agendamentos`;

    public agendamentos: Array<Observable<Agendamento>> = [];

    getAgendamentosDia(data: string) {        
        return this.httpClient.get<Agendamento[]>(this.agendamentosUrl + "/" + data,
            {
                withCredentials: true
            });
    }
}