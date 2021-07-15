import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../shared/services/resolution.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;

    public isMobile = false;

    constructor(
        private resolutionService: ResolutionService
    ) { }

    ngOnInit() {
        this.isMobile = this.resolutionService.isMobile();
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
