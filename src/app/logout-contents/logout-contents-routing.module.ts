import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './barbearia/agendamento/agenda/agenda.component';
import { ProfissionaisListComponent } from './barbearia/profissionais/profissionais-list/profissionais-list.component';
import { ServicosListComponent } from './barbearia/servicos/servicos-list/servicos-list.component';



const routes: Routes = [
    {
        path: 'barbearia/profissionais/:id',
        component: ProfissionaisListComponent
    },
    {

        path: 'barbearia/agendamento/:id',
        component: AgendaComponent
    },
    {
        path: 'barbearia/servicos/:id',
        component: ServicosListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogoutContentsRoutingModule { }
