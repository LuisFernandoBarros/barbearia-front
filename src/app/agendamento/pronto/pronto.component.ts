import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendamentoAgendado } from '../agendamento-agendado';


@Component({
  selector: 'app-pronto',
  templateUrl: './pronto.component.html',
  styleUrls: ['./pronto.component.scss']
})
export class ProntoComponent implements OnInit {



  @Input() agendamento: AgendamentoAgendado;
  @Input() callbackFazerOutroAgendamento: () => void;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fazerOutroAgendamento() {
    this.callbackFazerOutroAgendamento();
  }

}
