import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';


import { CadastroProfissionalRoutingModule } from '../cadastro-profissional/cadastro-profissional-routing.module';

import { CadastroProfissionalComponent } from '../cadastro-profissional/component/cadastro-profissional/cadastro-profissional.component';
import { ListComponent } from './component/list/list.component';
import { DetalhesComponent } from './component/detalhes/detalhes.component';


@NgModule({
    imports: [
        CommonModule,
        CadastroProfissionalRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [CadastroProfissionalComponent, ListComponent, DetalhesComponent]
})
export class CadastroProfissionalModule { }
