import { Component, OnInit } from '@angular/core';
import { IntroService } from '../shared/services/intro/intro.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;

    constructor(private introService: IntroService,
        private localStorageService: LocalStorageService) {}

    ngOnInit() {
        if(this.localStorageService.hasConfig('CADASTRAR_BARBEARIA')){        
            this.introService.show('CADASTRAR_BARBEARIA');
        }
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
