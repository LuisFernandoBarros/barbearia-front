import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";


@Injectable({ providedIn: 'root' })
export class DashboardService {

    private url = `${environment.API}/dashboard`;

    constructor(private httpClient: HttpClient) { }

    getTopServicos(dataIni: string, dataFim: string){
        const params = new HttpParams()
            .set('data-ini', dataIni)
            .set('data-fim', dataFim);
        return this.httpClient.get<Map<string, number>>(`${this.url}/top-servicos`, {
            params: params
        });
    };
}