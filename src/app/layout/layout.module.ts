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

@NgModule({
    imports: [CommonModule, LayoutRoutingModule, TranslateModule, NgbDropdownModule],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    providers:[
        IntroService, ConfiguracaoService
    ]
})
export class LayoutModule {}
