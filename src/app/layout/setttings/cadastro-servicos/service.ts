import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Servico } from "./servico";

@Injectable()
export class Service {

    private saveUrl = `${environment.API}/servicos`;

    constructor(private httpClient: HttpClient) { }

    save(servico: Servico) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions ({ headers: headers });        
        return this.httpClient.post(this.saveUrl, JSON.stringify(servico), {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        })
    }
}