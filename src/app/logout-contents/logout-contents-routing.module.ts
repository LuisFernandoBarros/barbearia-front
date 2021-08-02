import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './barbearia/agendamento/agenda/agenda.component';
import { BarbeariaComponent } from './barbearia/barbearia.component';
import { ProfissionaisListComponent } from './barbearia/profissionais/profissionais-list/profissionais-list.component';



const routes: Routes = [
    {
        path: 'barbearia',
        component: BarbeariaComponent,
        children: [
            {
                path: 'profissionais',
                component: ProfissionaisListComponent
            },
            {
                path: ':id/agendamento',
                component: AgendaComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogoutContentsRoutingModule { }
