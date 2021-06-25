import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';


import { CadastroProfissionalRoutingModule } from '../cadastro-profissional/cadastro-profissional-routing.module';

import { ListComponent } from './component/list/list.component';
import { DetalhesComponent } from './component/detalhes/detalhes.component';
import { EditarComponent } from './component/editar/editar.component';
import { NovoComponent } from './component/novo/novo.component';


@NgModule({
    imports: [
        CommonModule,
        CadastroProfissionalRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [ListComponent, DetalhesComponent, EditarComponent, NovoComponent]
})
export class CadastroProfissionalModule { }
