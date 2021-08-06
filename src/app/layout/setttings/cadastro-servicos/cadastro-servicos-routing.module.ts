import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoComponent } from './novo-componente/novo/novo.component';
import { ServicoListComponent } from '../cadastro-servicos/novo-componente/servico-list.component';

const routes: Routes = [
    {
        path: '',
        component: ServicoListComponent
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
