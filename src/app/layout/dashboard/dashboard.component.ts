import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardReadOnly } from './model/dashboard-read-only';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public dashboard = {} as DashboardReadOnly;
    public isLoading = true;
    public finallyCalback = () => { console.log("callback"); this.isLoading = false }

    constructor(private dashboardService: DashboardService) {

        //this.dashboardService.getDashboard(this.finallyCalback).subscribe((dashboard: DashboardReadOnly) => {
        this.dashboardService.getDashboard3().subscribe((dashboard: DashboardReadOnly) => {
            this.dashboard = dashboard;            
        }, (err) => { console.log("Erro") }, () => { console.log("Finalizado") });
    }

    ngOnInit() { }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
