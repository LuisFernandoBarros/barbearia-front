import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConsultaCepResponse } from "../model/consulta-cep-response";

@Injectable({ providedIn: 'root' })
export class ConsultaCepService {

    constructor(private httpClient: HttpClient) { }

    search(cep: string) {
        return this.httpClient.get<ConsultaCepResponse>(`//viacep.com.br/ws/${cep}/json`)
    }
}