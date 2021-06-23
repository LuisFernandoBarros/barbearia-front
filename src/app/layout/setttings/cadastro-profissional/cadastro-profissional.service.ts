import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Profissional } from "./profissional";

@Injectable({ providedIn: 'root' })
export class CadastroProfissionalService {

    private url = environment.API;

    constructor(private httpClient: HttpClient) { }

    save(body: Object) {
        return this.httpClient.post(`${this.url}/profissional`, JSON.stringify(body))
    }

    get() {
        return this.httpClient.get<any>(`${this.url}/profissional`)
    }

    getByID(id: number) {
        return this.httpClient.get<Profissional>(`${this.url}/profissional/${id}`)
    }    
}