import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class CadastroBarbeariaService {


    private baseUrl = environment.API;

    constructor(private httpClient: HttpClient) { }

    save(body: Object) {        
        return this.httpClient.post(`${this.baseUrl}/barbearia`, JSON.stringify(body))
    }
}