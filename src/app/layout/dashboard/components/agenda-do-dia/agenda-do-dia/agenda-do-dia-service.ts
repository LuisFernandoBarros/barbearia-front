import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Agendamento } from '../item-agendamento/agendamento';

@Injectable()
export class AgendaDoDiaService {

    private agendamentosUrl = 'dashboard/get-agendamentos-dia=27/08/2021';

    public agendamentos: Array<Observable<Agendamento>> = [];

    getAgendamentosDia(): Observable<Agendamento>[] {
        
        new Observable<Agendamento>((observer) => {

            var eventSource = new EventSource(this.agendamentosUrl, {
                withCredentials: true
            });


            eventSource.onmessage = function (event) {
                let json = JSON.parse(event.data);                
                observer.next(new Dashboard(json.id, json.totalClientes));
                eventSource.close();
                observer.complete();
            }
        });

        return this.agendamentos;

    }
}