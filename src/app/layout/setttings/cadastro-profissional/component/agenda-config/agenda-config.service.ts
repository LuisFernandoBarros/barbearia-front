import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AgendaConfigService {

    private url = `${environment.API}/config-agenda`;

    constructor(private httpClient: HttpClient) { }

    save(body: Object) {
        return this.httpClient.post<any>(`${this.url}/servico`, JSON.stringify(body))
    };
}