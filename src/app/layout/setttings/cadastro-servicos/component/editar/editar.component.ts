import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../service';
import { Servico } from '../../servico';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public servico: Servico;

  constructor(private activedRoute: ActivatedRoute,
    private service: Service) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      (param: any) => { this.getServico(param['id']) }
    )
  }

  getServico(id: number) {
    this.service.getServico(id).subscribe(
      (resp) => { this.servico = resp; }
    );
  }
}
