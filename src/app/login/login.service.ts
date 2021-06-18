import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(private httpClient: HttpClient) {

    }

    logar(email: string, password: string) {

        let url = `${environment.API}/login/`;
        let body = {
            email: email,
            password: password
        }
        return this.httpClient.post(url, body, {
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            withCredentials: true
        })
    }
}