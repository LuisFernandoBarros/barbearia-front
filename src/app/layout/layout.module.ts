import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';
import { SimpleHeaderComponent } from './components/simple-header/simple-header.component';
import { MenuSettingsComponent } from './menu/menu-settings/menu-settings.component';
import { CadastroSenhaComponent } from './setttings/cadastro-senha/cadastro-senha.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ChangePasswordService } from './setttings/cadastro-senha/change-password.service';

@NgModule({
    imports: [CommonModule,
        LayoutRoutingModule, 
        TranslateModule, 
        NgbDropdownModule, 
        SharedModule, 
        ReactiveFormsModule],
    declarations: [
        LayoutComponent, 
        SidebarComponent, 
        HeaderComponent, 
        MenuComponent, 
        SimpleHeaderComponent, 
        MenuSettingsComponent, 
        CadastroSenhaComponent],
    providers: [
        FormBuilder,
        ChangePasswordService
    ]
})
export class LayoutModule { }
