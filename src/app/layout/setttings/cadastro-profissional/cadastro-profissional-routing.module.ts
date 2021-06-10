import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroProfissionalComponent } from '../cadastro-profissional/component/cadastro-profissional.component';


const routes: Routes = [
    {
        path: '',
        component: CadastroProfissionalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroProfissionalRoutingModule {}
