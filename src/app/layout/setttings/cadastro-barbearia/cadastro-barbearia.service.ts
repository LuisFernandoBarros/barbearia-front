import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Barbearia } from "./barbearia";

@Injectable({ providedIn: 'root' })
export class CadastroBarbeariaService {

    private baseUrl = environment.API;

    constructor(private httpClient: HttpClient) { }

    save(body: Object) {        
        return this.httpClient.post(`${this.baseUrl}/barbearia`, JSON.stringify(body))
    }

    get(){
        return this.httpClient.get<Barbearia>(`${this.baseUrl}/barbearia`);
    }
}