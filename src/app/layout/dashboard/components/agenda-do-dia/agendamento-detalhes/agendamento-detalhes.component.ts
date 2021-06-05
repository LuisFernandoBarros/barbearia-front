import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../../../../../shared/alerts/service/alert-service';

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
    private agendamentoDetalhesService: AgendamentoDetalhesService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    let modal = this;

    this.modalService.add(modal);
  }

  open() {
    this.ngModal.open(this.detalhes, { windowClass: 'dark-modal' });
  }

  compareceu(id: number) {
    this.agendamentoDetalhesService.atender(id)
      .subscribe(
        response => {
          console.log(response);
          this.handleSucess("Comparecimento salvo com sucesso")
        },
        (err) => { this.handleError("Erro ao salvar comparecimento") });

  }

  cancelou(id: number) {
    this.agendamentoDetalhesService.cancelar(id)
      .subscribe(
        response => {
          console.log(response);
          this.handleSucess("Agendamento cancelado com sucesso")
        },
        (err) => { this.handleError("Erro ao cancelar do agendamento") });
  }

  handleSucess(message: string) {
    this.alertService.showAlertSucess(message);
  }
  handleError(message: string) {
    this.alertService.showAlertDanger(message);
  }


}
