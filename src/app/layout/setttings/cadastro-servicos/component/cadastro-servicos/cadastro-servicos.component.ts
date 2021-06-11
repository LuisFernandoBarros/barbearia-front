import { Component, OnInit } from '@angular/core';
import { Servico } from '../../servico';

@Component({
  selector: 'app-cadastro-servicos',
  templateUrl: './cadastro-servicos.component.html',
  styleUrls: ['./cadastro-servicos.component.css']
})
export class CadastroServicosComponent implements OnInit {

  constructor() { }

  public servicos: Array<Servico> = [];

  ngOnInit(): void {

    this.servicos.push({
      id: 1,
      nome: "Corte com Máquina",
      valor: 35.0,
      tempo: 45.0
    },
      {
        id: 2,
        nome: "Corte com Máquina",
        valor: 35.0,
        tempo: 45.0
      },
      {
        id: 3,
        nome: "Corte com Máquina",
        valor: 35.0,
        tempo: 45.0
      });
  }

}
