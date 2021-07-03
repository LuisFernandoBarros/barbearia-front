import { Component, OnInit } from '@angular/core';
import { IntroService } from '../shared/intro/intro.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;

    constructor(private introService: IntroService) {}

    ngOnInit() {
        this.introService.show();
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
