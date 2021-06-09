import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CadastroBarbeariaService {

    constructor(private httpClient: HttpClient) { }

    save(body: Object) {        
        return this.httpClient.post("url", JSON.stringify(body))
    }
}