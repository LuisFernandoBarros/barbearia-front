import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared';
import { ConfiguracaoBarbeariaGuard } from '../shared/guard/configuracao-barbearia.guard';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                canActivate: [AuthGuard, ConfiguracaoBarbeariaGuard]
            },
            {
                path: 'barbearia',
                loadChildren: () => import('./setttings/cadastro-barbearia/cadastro-barbearia.module').then((m) => m.CadastroBarbeariaModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'profissional',
                loadChildren: () => import('./setttings/cadastro-profissional/cadastro-profissional.module').then((m) => m.CadastroProfissionalModule),
                canActivate: [AuthGuard, ConfiguracaoBarbeariaGuard]
            },
            {
                path: 'servicos',
                loadChildren: () => import('./setttings/cadastro-servicos/cadastro-servicos.module').then((m) => m.CadastroServicosModule),
                canActivate: [AuthGuard, ConfiguracaoBarbeariaGuard]
            },
            {
                path: 'config-agenda',
                loadChildren: () => import('./setttings/cadastro-agenda/cadastro-agenda.module').then((m) => m.CadastroAgendaModule),
                canActivate: [AuthGuard, ConfiguracaoBarbeariaGuard]
            },
            {
                path: 'charts',
                loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule),
                canActivate: [AuthGuard, ConfiguracaoBarbeariaGuard]
            },            
            {
                path: 'menu',
                component: MenuComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
