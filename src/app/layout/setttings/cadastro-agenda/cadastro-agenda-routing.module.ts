import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaConfigComponent } from './component/agenda-config/agenda-config.component';



const routes: Routes = [
    {
        path: '',
        component: AgendaConfigComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroAgendaRoutingModule { }
