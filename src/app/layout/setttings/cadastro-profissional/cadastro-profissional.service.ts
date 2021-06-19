import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class CadastroProfissionalService {

    private url = environment.API;

    constructor(private httpClient: HttpClient) { }

    save(body: Object) {
        console.log(body);
        return this.httpClient.post(`${this.url}/profissional`, JSON.stringify(body))
    }

    get() {
        return this.httpClient.get<any>(`${this.url}/profissional`)
    }
}