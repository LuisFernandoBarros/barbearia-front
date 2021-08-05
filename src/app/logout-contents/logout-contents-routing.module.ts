import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './barbearia/agendamento/agenda/agenda.component';
import { ProfissionaisListComponent } from './barbearia/profissionais/profissionais-list/profissionais-list.component';



const routes: Routes = [
    {
        path: 'barbearia/profissionais/:id',
        component: ProfissionaisListComponent
    },
    {

        path: 'barbearia/agendamento/:id',
        component: AgendaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogoutContentsRoutingModule { }
