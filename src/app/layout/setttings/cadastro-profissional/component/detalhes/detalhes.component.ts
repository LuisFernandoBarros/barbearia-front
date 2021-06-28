import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../../cadastro-servicos/service';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';
import { Profissional } from '../../profissional';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  public profissional: Profissional;
  public isLoading: boolean;

  constructor(private service: CadastroProfissionalService,
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.activedRoute.params.subscribe(
      (param: any) => {
        this.service.getByID(param['id']).subscribe(
          (resp => { this.profissional = resp; this.isLoading = false; })
        )
      }
    )
  }

}
