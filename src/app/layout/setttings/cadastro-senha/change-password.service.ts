import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable()
export class ChangePasswordService {

    private url = `${environment.API}/profissional/change-password`;

    constructor(private httpClient: HttpClient) { }


    update(novaSenha: String, senhaAtual: String) {
        let senhas = {
            senhaNova: novaSenha,
            senhaAtual: senhaAtual
        }
        return this.httpClient.patch<any>(`${this.url}`, JSON.stringify(senhas));
    }    
}