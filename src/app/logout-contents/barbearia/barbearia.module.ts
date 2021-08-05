import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AgendaComponent } from './agendamento/agenda/agenda.component';
import { ProntoComponent } from './agendamento/pronto/pronto.component';
import { BarbeariaHeaderComponent } from './barbearia-header/barbearia-header.component';
import { ProfissionaisListComponent } from './profissionais/profissionais-list/profissionais-list.component';
import { ClipboardModule } from 'ngx-clipboard';




@NgModule({
  declarations: [    
    AgendaComponent,
    ProntoComponent,
    BarbeariaHeaderComponent,
    ProfissionaisListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ClipboardModule
  ]
})
export class BarbeariaModule { }
