import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { Barbearia } from '../layout/setttings/cadastro-barbearia/barbearia';
import { Servico } from '../layout/setttings/cadastro-servicos/servico';
import { AgendamentoAgendado } from './agendamento-agendado';

@Injectable({ providedIn: 'root' })
export class AgendamentoService {

    private baseUrl = environment.API;

    constructor(private httpClient: HttpClient) {

    }

    get(barbeariaId: string): Observable<Barbearia> {
        return this.httpClient.get<Barbearia>(`${this.baseUrl}/agendamento-cliente/barbearia/${barbeariaId}/`);
    }

    getServicos(id: number): Observable<Array<Servico>> {
        return this.httpClient.get<Array<Servico>>(`${this.baseUrl}/agendamento-cliente/profissional/${id}/servicos`);
    }

    getHorarios(idProfissional: number, data: string, idServico: number): Observable<Array<string>> {

        const params = new HttpParams()
            .set('data', data)
            .set('servico', idServico.toString());

        return this.httpClient.get<Array<string>>(`${this.baseUrl}/agendamento-cliente/profissional/${idProfissional}/horarios`, {
            params: params
        });
    }

    save(body: Object) {
        return this.httpClient.post<AgendamentoAgendado>(`${this.baseUrl}/agendamento-cliente/novo`, JSON.stringify(body))
    };
}