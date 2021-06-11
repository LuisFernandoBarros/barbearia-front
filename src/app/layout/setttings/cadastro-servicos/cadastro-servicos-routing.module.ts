import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroServicosComponent } from './component/cadastro-servicos/cadastro-servicos.component';

const routes: Routes = [
    {
        path: '',
        component: CadastroServicosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroServicosRoutingModule {}
