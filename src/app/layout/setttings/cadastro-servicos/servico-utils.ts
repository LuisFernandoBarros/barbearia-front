import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Servico } from "./servico";


@Injectable()
export class ServicoUtils {
    private subjectName = new Subject<any>();

    sendUpdate(servico: Servico) {
        this.subjectName.next(servico);
    }

    getUpdate(): Observable<any> {
        return this.subjectName.asObservable();
    }
}