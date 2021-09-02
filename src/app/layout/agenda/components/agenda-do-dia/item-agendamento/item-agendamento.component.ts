import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from './agendamento';

@Component({
  selector: '[app-item-agendamento]',
  templateUrl: './item-agendamento.component.html',
  styleUrls: ['./item-agendamento.component.scss']
})
export class ItemAgendamentoComponent implements OnInit {
  @Input()
  agendamento: any;
  constructor() { }

  ngOnInit(): void { }

  isAtendido(): boolean {
    return this.agendamento.atendidoEm != null
  }
}
