import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroServicosComponent } from './component/cadastro-servicos/cadastro-servicos.component';

import { CadastroServicosRoutingModule } from './cadastro-servicos-routing.module';
import { EditarComponent } from './component/editar/editar.component';

@NgModule({
  declarations: [
    CadastroServicosComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    CadastroServicosRoutingModule  
  ]
})
export class CadastroServicosModule { }
