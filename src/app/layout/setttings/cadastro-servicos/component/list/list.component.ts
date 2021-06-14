import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from '../../servico';

@Component({
  selector: 'app-cadastro-servicos',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CadastroServicosComponent implements OnInit {

  constructor(private router: Router) { }

  public servicos: Array<Servico> = [];

  ngOnInit(): void {

    this.servicos.push({
      id: 1,
      descricao: "Corte com Máquina",
      valor: 35.0,
      tempo: 45.0
    },
      {
        id: 2,
        descricao: "Corte com Máquina",
        valor: 35.0,
        tempo: 45.0
      },
      {
        id: 3,
        descricao: "Corte com Máquina",
        valor: 35.0,
        tempo: 45.0
      });
  }

  goToEditar(id: number) {
    this.router.navigate([`servicos/${id}/editar`]);
  }

}
