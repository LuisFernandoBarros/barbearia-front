import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { GraficoTopServicosComponent } from './grafico-top-servicos/grafico-top-servicos.component';
import { ChartsRoutingModule } from '../charts/charts-routing.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        Ng2Charts, 
        ChartsRoutingModule,
    ],
    declarations: [
        DashboardMenuComponent,
        GraficoTopServicosComponent
    ],
    providers: [
    ]
})
export class DashboardModule { }
