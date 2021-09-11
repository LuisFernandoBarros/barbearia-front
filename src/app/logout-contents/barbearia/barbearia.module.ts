import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { BarbeariaHeaderComponent } from './barbearia-header/barbearia-header.component';
import { ProfissionaisListComponent } from './profissionais/profissionais-list/profissionais-list.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ServicosListComponent } from './servicos/servicos-list/servicos-list.component';
import { ServicoItemComponent } from './servicos/servico-item/servico-item.component';
import { AgendaStepsComponent } from './agendamento/agenda-steps/agenda-steps.component';
import { AaDatepickerModule } from 'ngx-animating-datepicker';
import { SharedModule } from '../../shared/shared.module';
import { CancelAgendamentoComponent } from './agendamento/cancel-agendamento/cancel-agendamento.component';




@NgModule({
  declarations: [
    BarbeariaHeaderComponent,
    ProfissionaisListComponent,
    ServicosListComponent,
    ServicoItemComponent,
    AgendaStepsComponent,
    CancelAgendamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ClipboardModule,
    AaDatepickerModule,
    SharedModule
  ]
})
export class BarbeariaModule { }
