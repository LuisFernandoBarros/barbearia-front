import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroProfissionalComponent } from '../cadastro-profissional/component/cadastro-profissional/cadastro-profissional.component';
import { ListComponent } from './component/list/list.component';


const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroProfissionalRoutingModule {}
