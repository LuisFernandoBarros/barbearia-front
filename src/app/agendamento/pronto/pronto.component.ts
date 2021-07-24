import { Component, Input, OnInit } from '@angular/core';
import { AgendamentoAgendado } from '../agendamento-agendado';


@Component({
  selector: 'app-pronto',
  templateUrl: './pronto.component.html',
  styleUrls: ['./pronto.component.scss']
})
export class ProntoComponent implements OnInit {



  @Input() agendamento: AgendamentoAgendado;
  constructor() { }

  ngOnInit(): void {
    console.log(this.agendamento);
  }

}
