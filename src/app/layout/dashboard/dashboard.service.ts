
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, finalize } from 'rxjs/operators';
import { DashboardReadOnly } from './model/dashboard-read-only';
import { Dashboard } from './model/dashboard';

@Injectable({
    providedIn: 'root'
})

export class DashboardService {

    url = 'http://localhost:8080/agendamentos/data=27-05-2021';


    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    // Obtem todos os carros 
    getDashboard(finallyCalback): Observable<DashboardReadOnly> {
        return this.httpClient.get<DashboardReadOnly>(this.url, { responseType: 'json', withCredentials: true })
            .pipe(
                retry(2),
                finalize(() => { finallyCalback }))
        //catchError(this.handleError))

    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };


    // RXJS
    getDashboard2(): Observable<DashboardReadOnly> {
        return new Observable<DashboardReadOnly>((observer) => {
            let url = this.url;
            let eventSource = new EventSource(url, {
                withCredentials: true
            });
            eventSource.onmessage = (event) => {
                console.debug('Received event: ', event);
                let json = JSON.parse(event.data);
                observer.next(new Dashboard(json['id'], json['totalClientes']));
            };
            eventSource.onerror = (error) => {
                if (eventSource.readyState === 0) {
                    console.log('The stream has been closed by the server.');
                    eventSource.close();
                    observer.complete();
                } else {
                    observer.error('EventSource error: ' + error);
                }
            }
        });
    }


    getDashboard3(): Observable<Dashboard> {
        return new Observable<Dashboard>((observer) => {
            // cria a conexão persistente
            var eventSource = new EventSource(this.url, {
                withCredentials: true
            });

            // define um evento que é executado quando o servidor envia uma mensagem
            eventSource.onmessage = function (event) {                
                let json = JSON.parse(event.data); 
                console.log(json.totalClientes);
                observer.next(new Dashboard(json.id, json.totalClientes));
                eventSource.close();
                observer.complete();
            }
        });

    }
}