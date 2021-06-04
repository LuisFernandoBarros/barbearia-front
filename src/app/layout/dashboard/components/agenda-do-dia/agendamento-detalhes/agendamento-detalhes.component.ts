import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agendamento } from '../item-agendamento/agendamento';
import { ModalService } from '../service/modal-service';
import { AgendamentoDetalhesService } from './agendamento-detlahes-service';

@Component({
  selector: 'app-agendamento-detalhes',
  templateUrl: './agendamento-detalhes.component.html',
  styleUrls: ['./agendamento-detalhes.component.scss']
})
export class AgendamentoDetalhesComponent implements OnInit {


  @Input() id: string;
  @Input() agendamento: Agendamento;
  @ViewChild("detalhes") detalhes;

  constructor(private modalService: ModalService, private ngModal: NgbModal,
    private agendamentoDetalhesService: AgendamentoDetalhesService) { }

  ngOnInit(): void {
    let modal = this;

    this.modalService.add(modal);
  }

  open() {
    this.ngModal.open(this.detalhes, { windowClass: 'dark-modal' });
  }

  compareceu(id: number) {
    this.agendamentoDetalhesService.atender(id)
      .subscribe(response => console.log(response));
  }

  cancelou(id: number) {    
    this.agendamentoDetalhesService.cancelar(id)
      .subscribe(response => console.log(response));
  }

}
