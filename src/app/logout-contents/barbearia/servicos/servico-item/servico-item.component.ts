import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../../../shared/services/modal-service';
import { Profissional } from '../../../../layout/setttings/cadastro-profissional/profissional';

@Component({
  selector: 'app-servico-item',
  templateUrl: './servico-item.component.html',
  styleUrls: ['./servico-item.component.scss']
})
export class ServicoItemComponent implements OnInit {

  @Input() id: string;
  @Input() profissional: Profissional
  @ViewChild("servicoModal") servicosModal;

  public modal: NgbModalRef

  constructor(private modalService: ModalService,
    private ngModal: NgbModal) { }

  ngOnInit(): void {
    this.modalService.add(this);
  }

  open() {
    this.modal = this.ngModal.open(this.servicosModal, { windowClass: 'dark-modal' });
  }

  close() {
    this.modal.close();
  }

}
