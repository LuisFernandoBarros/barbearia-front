import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

import { NgxMaskModule } from 'ngx-mask';
import { CadastroAgendaRoutingModule } from './cadastro-agenda-routing.module';
import { AgendaConfigComponent } from './component/agenda-config/agenda-config.component';
import { DiaSemanaComponent } from './component/agenda-config/dia-semana/dia-semana.component';
 


@NgModule({
    imports: [
        CommonModule,
        CadastroAgendaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [
        AgendaConfigComponent, DiaSemanaComponent
    ],
    exports: [
        
    ]
})
export class CadastroAgendaModule { }
