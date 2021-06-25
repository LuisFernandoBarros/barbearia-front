import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'barbearia',
                loadChildren: () => import('./setttings/cadastro-barbearia/cadastro-barbearia.module').then((m) => m.CadastroBarbeariaModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'profissional',
                loadChildren: () => import('./setttings/cadastro-profissional/cadastro-profissional.module').then((m) => m.CadastroProfissionalModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'servicos',
                loadChildren: () => import('./setttings/cadastro-servicos/cadastro-servicos.module').then((m) => m.CadastroServicosModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'charts',
                loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
