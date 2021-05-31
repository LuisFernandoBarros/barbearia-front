import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../item-agendamento/agendamento';

@Component({
  selector: 'app-agenda-do-dia',
  templateUrl: './agenda-do-dia.component.html',
  styleUrls: ['./agenda-do-dia.component.scss']
})
export class AgendaDoDiaComponent implements OnInit {

  constructor() { }

  public dataFormated: string;
  public agendamentos: Array<Agendamento> = [];

  ngOnInit(): void {
    this.setToday();

    this.agendamentos.push({
      horario: "08:00",
      nome: "Luis Fernando",
      servico: "Barba e Cabelo",
      valor: 35,
      telefone: "51998887411"
    },
    {
      horario: "08:00",
      nome: "Luis Fernando",
      servico: "Barba e Cabelo",
      valor: 35,
      telefone: "51998887411"
    })
  }

  private setToday() {    
    let data = new Date();
    this.dataFormated = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  }

}
