import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroServicosRoutingModule } from './cadastro-servicos-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './novo-componente/form/form.component';
import { NovoComponent } from './novo-componente/novo/novo.component';
import { Service } from './service';
import { NgxMaskModule } from 'ngx-mask';
import { ServicoComponent } from './novo-componente/servico/servico.component';
import { ServicoListComponent } from './novo-componente/servico-list.component';

@NgModule({
  declarations: [
    FormComponent,
    NovoComponent,
    ServicoListComponent,
    ServicoComponent
  ],
  imports: [
    CommonModule,
    CadastroServicosRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    Service
  ]
})
export class CadastroServicosModule { }
