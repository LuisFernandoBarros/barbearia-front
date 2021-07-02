import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../../../shared/shared.module';
import { CadastroBarbeariaRoutingModule } from './cadastro-barbearia-routing.module';
import { CadastroBarbeariaComponent } from './component/cadastro-barbearia/cadastro-barbearia.component';
import { ListComponent } from './component/list/list.component';
import { NovoComponent } from './component/novo/novo.component'


@NgModule({
    imports: [
        CommonModule, 
        CadastroBarbeariaRoutingModule,
        FormsModule, 
        ReactiveFormsModule, 
        SharedModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [CadastroBarbeariaComponent, ListComponent, NovoComponent]
})
export class CadastroBarbeariaModule {}
