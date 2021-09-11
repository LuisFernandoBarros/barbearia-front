import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss'],
    animations: [routerTransition()]
})
export class AgendaComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
