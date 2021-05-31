import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { ChatComponent, NotificationComponent, TimelineComponent } from './components';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AgendaDoDiaComponent } from './components/agenda-do-dia/agenda-do-dia/agenda-do-dia.component';
import { ItemAgendamentoComponent } from './components/agenda-do-dia/item-agendamento/item-agendamento.component';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, DashboardRoutingModule, StatModule],
    declarations: [DashboardComponent, TimelineComponent, NotificationComponent, ChatComponent, AgendaDoDiaComponent, ItemAgendamentoComponent]
})
export class DashboardModule {}
