import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgComponent } from '../../../shared/error-msg/error-msg.component';

import { CadastroProfissionalRoutingModule } from '../cadastro-profissional/cadastro-profissional-routing.module';

import { CadastroProfissionalComponent } from '../cadastro-profissional/component/cadastro-profissional.component';


@NgModule({
    imports: [CommonModule, CadastroProfissionalRoutingModule,FormsModule, ReactiveFormsModule],
    declarations: [CadastroProfissionalComponent, ErrorMsgComponent]
})
export class CadastroProfissionalModule {}
