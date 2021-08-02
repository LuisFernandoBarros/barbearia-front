import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AgendaComponent } from './agendamento/agenda/agenda.component';
import { ProntoComponent } from './agendamento/pronto/pronto.component';




@NgModule({
  declarations: [    
    AgendaComponent,
    ProntoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class BarbeariaModule { }
