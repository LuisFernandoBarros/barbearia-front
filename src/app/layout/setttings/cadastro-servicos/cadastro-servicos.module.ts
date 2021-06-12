import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroServicosComponent } from './component/cadastro-servicos/cadastro-servicos.component';

import { CadastroServicosRoutingModule } from './cadastro-servicos-routing.module';
import { EditarComponent } from './component/editar/editar.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './component/form/form.component';

@NgModule({
  declarations: [
    CadastroServicosComponent,
    EditarComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CadastroServicosRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    SharedModule
  ]
})
export class CadastroServicosModule { }
