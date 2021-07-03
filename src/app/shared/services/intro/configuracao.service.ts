import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";


@Injectable()
export class ConfiguracaoService {

    private url = `${environment.API}/configuracao`;

    constructor(private httpClient: HttpClient) { }

    save(configuracao: string) {
        return this.httpClient.post<any>(this.url, JSON.stringify(configuracao));
    }
}