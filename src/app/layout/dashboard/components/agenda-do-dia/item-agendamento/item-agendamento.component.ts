import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-item-agendamento]',
  templateUrl: './item-agendamento.component.html',
  styleUrls: ['./item-agendamento.component.scss']
})
export class ItemAgendamentoComponent implements OnInit {
  @Input() 
  agendamento: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.agendamento);
  }

}
