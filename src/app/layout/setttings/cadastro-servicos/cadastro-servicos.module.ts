import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroServicosComponent } from './component/cadastro-servicos/cadastro-servicos.component';

import { CadastroServicosRoutingModule } from './cadastro-servicos-routing.module';



@NgModule({
  declarations: [
    CadastroServicosComponent
  ],
  imports: [
    CommonModule,
    CadastroServicosRoutingModule  
  ]
})
export class CadastroServicosModule { }
