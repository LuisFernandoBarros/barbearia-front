import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { CadastroBarbeariaRoutingModule } from './cadastro-barbearia-routing.module';
import { CadastroBarbeariaComponent } from './component/cadastro-barbearia.component';


@NgModule({
    imports: [CommonModule, CadastroBarbeariaRoutingModule,FormsModule, ReactiveFormsModule, SharedModule],
    declarations: [CadastroBarbeariaComponent]
})
export class CadastroBarbeariaModule {}
