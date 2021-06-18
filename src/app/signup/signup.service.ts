import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";


@Injectable()
export class SignupService {

    private saveUrl = `${environment.API}/signup/`;

    constructor(private httpClient: HttpClient) { }

    save(newCadastro: any) {
        return this.httpClient.post(this.saveUrl, JSON.stringify(newCadastro), {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        })
    }
}