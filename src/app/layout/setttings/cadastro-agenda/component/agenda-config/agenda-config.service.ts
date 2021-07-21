import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../../environments/environment";
import { Expediente } from "./expediente";

@Injectable({ providedIn: 'root' })
export class AgendaConfigService {

    private url = `${environment.API}/config-agenda`;

    constructor(private httpClient: HttpClient) { }

    update(body: Object) {
        return this.httpClient.patch<Expediente>(`${this.url}/expediente`, JSON.stringify(body))
    };    

    getAllDiasSemanaByUserLogado() {
        return this.httpClient.get<Array<Expediente>>(`${this.url}/expedientes`);
    };
    
    closeAtendimento(diaSemana: number, isToClose: boolean) {
        return this.httpClient.patch<any>(`${this.url}/close/${diaSemana}`, {isToClose});
    };      
}