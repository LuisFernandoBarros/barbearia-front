import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgComponent } from '../../../shared/error-msg/error-msg.component';
import { CadastroBarbeariaRoutingModule } from './cadastro-barbearia-routing.module';
import { CadastroBarbeariaComponent } from './component/cadastro-barbearia.component';


@NgModule({
    imports: [CommonModule, CadastroBarbeariaRoutingModule,FormsModule, ReactiveFormsModule],
    declarations: [CadastroBarbeariaComponent, ErrorMsgComponent]
})
export class CadastroBarbeariaModule {}
