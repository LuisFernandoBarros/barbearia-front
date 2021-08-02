import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ProntoComponent } from './pronto/pronto.component';



@NgModule({
  declarations: [
    AgendaComponent,
    ProntoComponent
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class AgendamentoModule { }
