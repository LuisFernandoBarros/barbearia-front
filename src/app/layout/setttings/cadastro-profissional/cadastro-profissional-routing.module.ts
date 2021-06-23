import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesComponent } from './component/detalhes/detalhes.component';
import { EditarComponent } from './component/editar/editar.component';
import { ListComponent } from './component/list/list.component';
import { NovoComponent } from './component/novo/novo.component';


const routes: Routes = [
    {
        path: '',
        component: ListComponent,
    },    
    {
        path: 'novo',
        component: NovoComponent,
    },
    {
        path: ':id/editar',
        component: EditarComponent
    },
    {
        path: ':id',
        component: DetalhesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroProfissionalRoutingModule { }
