import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ConfiguracaoService } from '../shared/services/intro/configuracao.service';
import { IntroService } from '../shared/services/intro/intro.service';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';
import { SimpleHeaderComponent } from './components/simple-header/simple-header.component';

@NgModule({
    imports: [CommonModule, LayoutRoutingModule, TranslateModule, NgbDropdownModule],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, MenuComponent, SimpleHeaderComponent],
    providers:[
        IntroService, ConfiguracaoService
    ]
})
export class LayoutModule {}
