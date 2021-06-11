import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';


import { CadastroProfissionalRoutingModule } from '../cadastro-profissional/cadastro-profissional-routing.module';

import { CadastroProfissionalComponent } from '../cadastro-profissional/component/cadastro-profissional.component';


@NgModule({
    imports: [CommonModule, CadastroProfissionalRoutingModule,FormsModule, ReactiveFormsModule, SharedModule],
    declarations: [CadastroProfissionalComponent]
})
export class CadastroProfissionalModule {}
