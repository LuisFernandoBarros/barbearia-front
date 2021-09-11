import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { Servico } from '../../../layout/setttings/cadastro-servicos/servico';
import { AgendamentoAgendado } from './agendamento-agendado';

@Injectable({ providedIn: 'root' })
export class AgendamentoService {

    private baseUrl = environment.API;

    constructor(private httpClient: HttpClient) {

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

    cancelar(id: string, telefone: string) {
        return this.httpClient.post<any>(`${this.baseUrl}/agendamento-cliente/cancelar/${id}`, JSON.stringify(telefone))
    };

    getByCelularCliente(celular: string) {
        const params = new HttpParams()
            .set('celular', celular);

        return this.httpClient.get<Array<any>>(`${this.baseUrl}/agendamento-cliente`, {
            params: params
        });
    };
}