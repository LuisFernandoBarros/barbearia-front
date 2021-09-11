import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../../shared/services/modal-service';
import { Barbearia } from '../../../../layout/setttings/cadastro-barbearia/barbearia';
import { BarbeariaService } from '../../barbearia.service';

@Component({
  selector: 'app-servicos-list',
  templateUrl: './servicos-list.component.html',
  styleUrls: ['./servicos-list.component.scss']
})
export class ServicosListComponent implements OnInit {

  public isLoadingBarbearia: boolean;
  public barbearia: Barbearia;

  constructor(private barbeariaService: BarbeariaService,
    private activedRoute: ActivatedRoute,
    private modalService: ModalService) { }

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

  openModal(id: number) {
    this.modalService.open(id.toString());
  }  
}
