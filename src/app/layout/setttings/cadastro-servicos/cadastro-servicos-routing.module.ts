import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroServicosComponent } from './component/cadastro-servicos/cadastro-servicos.component';
import { EditarComponent } from './component/editar/editar.component';
import { NovoComponent } from './component/novo/novo.component';

const routes: Routes = [
    {
        path: '',
        component: CadastroServicosComponent
    },
    {
        path: ':id/editar', component: EditarComponent
    },
    {
        path: 'novo', component: NovoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroServicosRoutingModule { }
