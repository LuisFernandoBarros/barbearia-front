import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { Horario } from "./horario";

@Injectable({ providedIn: 'root' })
export class AgendaConfigService {

    private url = `${environment.API}/config-agenda`;

    constructor(private httpClient: HttpClient) { }

    update(body: Object) {
        return this.httpClient.patch<Horario>(`${this.url}/horario`, JSON.stringify(body))
    };    

    getAllDiasSemanaByUserLogado() {
        return this.httpClient.get<Array<Horario>>(`${this.url}/horarios`);
    };
    
    closeAtendimento(diaSemana: number, isToClose: boolean) {
        return this.httpClient.patch<any>(`${this.url}/close/${diaSemana}`, {isToClose});
    };      
}