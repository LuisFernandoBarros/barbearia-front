import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Agendamento } from '../item-agendamento/agendamento';

@Injectable({ providedIn: 'root' })
export class AgendamentoDetalhesService {

    constructor(private httpClient: HttpClient) { }

    private agendamentosUrl = 'http://localhost:8080/agendamentos';

    public agendamentos: Array<Observable<Agendamento>> = [];

    cancelar(id: number) {
        let urlCancelar = this.agendamentosUrl + `/cancelar/${id}`;
        return this.httpClient.put(urlCancelar, {}).pipe(take(1));
    }

    atender(id: number) {
        let urlAtender = this.agendamentosUrl + `/atender/${id}`;
        return this.httpClient.put(urlAtender, {}).pipe(take(1));
    }    
}