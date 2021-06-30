import { Component, Input, OnInit } from '@angular/core';
import { Profissional } from '../../profissional';

@Component({
  selector: 'app-agenda-config',
  templateUrl: './agenda-config.component.html',
  styleUrls: ['./agenda-config.component.css']
})
export class AgendaConfigComponent implements OnInit {

  @Input() profissional: Profissional;

  constructor() { }

  ngOnInit(): void {
  }
}