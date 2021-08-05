import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barbearia } from '../../../../layout/setttings/cadastro-barbearia/barbearia';
import { BarbeariaService } from '../../barbearia.service';

@Component({
  selector: 'app-profissionais-list',
  templateUrl: './profissionais-list.component.html',
  styleUrls: ['./profissionais-list.component.scss']
})
export class ProfissionaisListComponent implements OnInit {

  private isLoadingBarbearia: boolean;
  public barbearia: Barbearia;

  constructor(private barbeariaService: BarbeariaService,
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoadingBarbearia = true;
    this.activedRoute.params.subscribe(
      (param: any) => { this.getBarbearia(param['id']) }
    )
  }

  getBarbearia(barbeariaId: string) {
    this.barbeariaService.get(barbeariaId).subscribe(
      (resp) => {
        this.barbearia = resp;
        this.isLoadingBarbearia = false;
      }
    );
  }

}
