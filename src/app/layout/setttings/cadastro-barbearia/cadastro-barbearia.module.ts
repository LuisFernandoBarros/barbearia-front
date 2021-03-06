import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../../../shared/shared.module';
import { CadastroBarbeariaRoutingModule } from './cadastro-barbearia-routing.module';
import { CadastroBarbeariaComponent } from './component/cadastro-barbearia/cadastro-barbearia.component';
import { ImagemUploadComponent } from './component/imagem-upload/imagem-upload.component';


@NgModule({
    imports: [
        CommonModule, 
        CadastroBarbeariaRoutingModule,
        FormsModule, 
        ReactiveFormsModule, 
        SharedModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [CadastroBarbeariaComponent, ImagemUploadComponent]
})
export class CadastroBarbeariaModule {}
