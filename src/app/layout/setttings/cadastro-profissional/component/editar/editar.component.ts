import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';
import { Profissional } from '../../profissional';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public profissional: Profissional;
  public isLoading: boolean;

  constructor(private activedRoute: ActivatedRoute,
    private service: CadastroProfissionalService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.activedRoute.params.subscribe(
      (param: any) => { this.getProfissional(param['id']) }
    )
  }
  
  getProfissional(id: number) {
    this.service.getByID(id).subscribe(
      (resp) => {        
        this.profissional = resp;
        this.isLoading = false;
      }
    );
  }
}
