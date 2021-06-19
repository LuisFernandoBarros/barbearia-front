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
            {
                path: 'tables',
                loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule)
            },
            {
                path: 'forms',
                loadChildren: () => import('./form/form.module').then((m) => m.FormModule)
            },
            {
                path: 'bs-element',
                loadChildren: () => import('./bs-element/bs-element.module').then((m) => m.BsElementModule)
            },
            {
                path: 'grid',
                loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule)
            },
            {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            },
            {
                path: 'blank-page',
                loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
