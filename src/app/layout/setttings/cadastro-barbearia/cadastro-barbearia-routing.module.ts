import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroBarbeariaComponent } from './component/cadastro-barbearia/cadastro-barbearia.component';

const routes: Routes = [
    {
        path: '',
        component: CadastroBarbeariaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroBarbeariaRoutingModule {}
