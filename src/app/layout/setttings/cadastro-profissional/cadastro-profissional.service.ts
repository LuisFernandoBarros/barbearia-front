import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CadastroProfissionalService {

    constructor(private httpClient: HttpClient) { }

    save(body: Object) {        
        return this.httpClient.post("url", JSON.stringify(body))
    }
}