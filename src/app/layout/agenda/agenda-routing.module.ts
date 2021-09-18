import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { AgendamentoManualComponent } from './components/agenda-do-dia/agendamento-manual/agendamento-manual.component';

const routes: Routes = [
    {
        path: '',
        component: AgendaComponent
    },
    {
        path: 'manual',
        component: AgendamentoManualComponent
    }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgendaRoutingModule {}
