import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Barbearia } from "./barbearia";

@Injectable({ providedIn: 'root' })
export class CadastroBarbeariaService {

    private baseUrl = environment.API;

    constructor(private httpClient: HttpClient) { }

    save(body: Barbearia) {
        return this.httpClient.post<Barbearia>(`${this.baseUrl}/barbearia`, JSON.stringify(body))
    }

    update(body: Barbearia) {
        return this.httpClient.patch<Barbearia>(`${this.baseUrl}/barbearia`, JSON.stringify(body))
    }

    get() {
        return this.httpClient.get<Barbearia>(`${this.baseUrl}/barbearia`);
    }

    uploadImg(img: File, id: number) {
        const formData = new FormData();
        formData.append('file', img);
        return this.httpClient.post<any>(`${this.baseUrl}/barbearia/${id}/upload-img`, formData);
    }
}