import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { Barbearia } from '../layout/setttings/cadastro-barbearia/barbearia';
import { Servico } from '../layout/setttings/cadastro-servicos/servico';

@Injectable({ providedIn: 'root' })
export class AgendamentoService {

    private baseUrl = environment.API;

    constructor(private httpClient: HttpClient) {

    }

    get(): Observable<Barbearia> {
        return this.httpClient.get<Barbearia>(`${this.baseUrl}/agendamento-cliente/barbearia/123/`);
    }

    getServicos(id: number): Observable<Array<Servico>> {        
        return this.httpClient.get<Array<Servico>>(`${this.baseUrl}/agendamento-cliente/profissional/${id}/servicos`);        
    }
}