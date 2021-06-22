import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroServicosComponent } from './component/list/list.component';

import { CadastroServicosRoutingModule } from './cadastro-servicos-routing.module';
import { EditarComponent } from './component/editar/editar.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './component/form/form.component';
import { NovoComponent } from './component/novo/novo.component';
import { Service } from './service';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    CadastroServicosComponent,
    EditarComponent,
    FormComponent,
    NovoComponent
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
