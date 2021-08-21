import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AgendaComponent } from './agendamento/agenda/agenda.component';
import { ProntoComponent } from './agendamento/pronto/pronto.component';
import { BarbeariaHeaderComponent } from './barbearia-header/barbearia-header.component';
import { ProfissionaisListComponent } from './profissionais/profissionais-list/profissionais-list.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ServicosListComponent } from './servicos/servicos-list/servicos-list.component';
import { ServicoItemComponent } from './servicos/servico-item/servico-item.component';
import { AgendaStepsComponent } from './agendamento/agenda-steps/agenda-steps.component';
import { AaDatepickerModule } from 'ngx-animating-datepicker';




@NgModule({
  declarations: [    
    AgendaComponent,
    ProntoComponent,
    BarbeariaHeaderComponent,
    ProfissionaisListComponent,
    ServicosListComponent,
    ServicoItemComponent,
    AgendaStepsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ClipboardModule,
    AaDatepickerModule
  ]
})
export class BarbeariaModule { }
