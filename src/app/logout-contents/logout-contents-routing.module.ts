import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaStepsComponent } from './barbearia/agendamento/agenda-steps/agenda-steps.component';
import { CancelAgendamentoComponent } from './barbearia/agendamento/cancel-agendamento/cancel-agendamento.component';
import { ProfissionaisListComponent } from './barbearia/profissionais/profissionais-list/profissionais-list.component';
import { ServicosListComponent } from './barbearia/servicos/servicos-list/servicos-list.component';



const routes: Routes = [
    {
        path: 'barbearia/profissionais/:id',
        component: ProfissionaisListComponent
    },    
    {
        path: 'barbearia/servicos/:id',
        component: ServicosListComponent
    },
    {

        path: 'barbearia/agendamento-steps/:id',
        component: AgendaStepsComponent
    },
    {

        path: 'barbearia/cancel-agendamento/:id',
        component: CancelAgendamentoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogoutContentsRoutingModule { }
