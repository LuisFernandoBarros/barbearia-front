import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
  ]
})
export class AgendamentoModule { }
