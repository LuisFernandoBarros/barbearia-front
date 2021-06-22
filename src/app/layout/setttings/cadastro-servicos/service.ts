import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Servico } from "./servico";

@Injectable()
export class Service {

    private url = `${environment.API}/servicos`;

    constructor(private httpClient: HttpClient) { }

    save(servico: Servico) {
        return this.httpClient.post<Servico>(this.url, JSON.stringify(servico));
    }

    update(servico: Servico) {
        return this.httpClient.patch<Servico>(`${this.url}/${servico.id}`, JSON.stringify(servico));
    }    

    getServico(id: number){
        return this.httpClient.get<Servico>(`${this.url}/${id}`);
    }
}