import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CadastroBarbeariaRoutingModule } from './cadastro-barbearia-routing.module';
import { CadastroBarbeariaComponent } from './component/cadastro-barbearia.component';


@NgModule({
    imports: [CommonModule, CadastroBarbeariaRoutingModule],
    declarations: [CadastroBarbeariaComponent]
})
export class CadastroBarbeariaModule {}
