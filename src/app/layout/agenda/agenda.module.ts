import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedPipesModule, StatModule } from '../../shared';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { AgendaDoDiaComponent } from './components/agenda-do-dia/agenda-do-dia/agenda-do-dia.component';
import { ItemAgendamentoComponent } from './components/agenda-do-dia/item-agendamento/item-agendamento.component';
import { AgendamentoDetalhesComponent } from './components/agenda-do-dia/agendamento-detalhes/agendamento-detalhes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendamentoManualComponent } from './components/agenda-do-dia/agendamento-manual/agendamento-manual.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { AaDatepickerModule } from 'ngx-animating-datepicker';
import { PopoverModule } from 'ngx-smart-popover';

@NgModule({
    imports: [
        CommonModule, 
        NgbCarouselModule, 
        NgbAlertModule, 
        AgendaRoutingModule, 
        StatModule, 
        SharedPipesModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxMaskModule.forRoot(),
        AaDatepickerModule,
        PopoverModule
    ],
    declarations: [AgendaComponent, AgendaDoDiaComponent, ItemAgendamentoComponent, AgendamentoDetalhesComponent, AgendamentoManualComponent],
    providers: [
        DatePipe
    ]
})
export class AgendaModule { }
