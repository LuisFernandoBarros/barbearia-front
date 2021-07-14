import { Component, OnInit } from '@angular/core';
import { IntroService } from '../shared/services/intro/intro.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { ResolutionService } from '../shared/services/resolution.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;

    public isMobile = false;

    constructor(private introService: IntroService,
        private localStorageService: LocalStorageService,
        private resolutionService: ResolutionService) { }

    ngOnInit() {
        if (this.localStorageService.hasConfig('CADASTRAR_BARBEARIA')) {
            this.introService.show('CADASTRAR_BARBEARIA');
        }
        this.isMobile = this.resolutionService.isMobile();
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
