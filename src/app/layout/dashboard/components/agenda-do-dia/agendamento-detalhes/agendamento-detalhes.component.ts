import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService) { }

    modal: NgbModalRef;

  ngOnInit(): void {
    this.modalService.add(this);
  }

  open() {
    this.modal = this.ngModal.open(this.detalhes, { windowClass: 'dark-modal' });
  }

  close() {    
    this.modal.close();
  }
  
 
  compareceu(id: number) {
    this.agendamentoDetalhesService.atender(id)
      .subscribe(
        response => {
          console.log(response);          
          this.toastr.success('Salvo com Sucesso', '');
          this.modalService.close(this.id);
        },
        (err) => { this.toastr.error('Salvo com Sucesso', '') });

  }

  cancelou(id: number) {
    this.agendamentoDetalhesService.cancelar(id)
      .subscribe(
        response => {
          console.log(response);
          this.toastr.success('Salvo com Sucesso', '');
          this.modalService.close(this.id);
        },
        (err) => { this.toastr.error('Salvo com Sucesso', '') });
  }
}
