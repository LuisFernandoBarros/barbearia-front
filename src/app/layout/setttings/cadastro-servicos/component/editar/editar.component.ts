import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servico } from '../../servico';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public servico: Servico;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activedRoute.params.subscribe(
      (param: any) => { this.servico = this.getServico(param['id']) }
    )
  }

  getServico(id: number): Servico {
    // AQUI TEM QUE BUSCAR A IMPLEMENTACAO DO BACK
    console.log(id)
    return {
      id: 5,
      valor: 15,
      nome: "BlaBla",
      tempo: 85
    }
  }
}
