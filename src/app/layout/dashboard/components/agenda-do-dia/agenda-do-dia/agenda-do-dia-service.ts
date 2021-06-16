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
        this.migueLogin().subscribe();
        //return null;
        return this.httpClient.get<Agendamento[]>(this.agendamentosUrl + "/" + data,
            {
                withCredentials: true
            });
    }

    migueLogin() {
        let url = `${environment.API}/login/`;
        let body = {
            email: "lala@lala.com",
            password: "teste"
        }
        return this.httpClient.post(url, body, {
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            withCredentials: true            
        })

        /*        let params = new HttpParams().set("login", "Login").set("password", "Password");        
                return this.httpClient.post(url, null, {            
                    headers: { 'Content-Type': 'application/json; charset=utf-8'},
                    withCredentials: true,
                    params: params
                })
        */
    }
}