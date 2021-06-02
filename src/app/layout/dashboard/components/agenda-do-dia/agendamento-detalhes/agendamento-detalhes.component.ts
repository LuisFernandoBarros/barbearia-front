import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../service/modal-service';

@Component({
  selector: 'app-agendamento-detalhes',
  templateUrl: './agendamento-detalhes.component.html',
  styleUrls: ['./agendamento-detalhes.component.css']
})
export class AgendamentoDetalhesComponent implements OnInit {


  @Input() id: string;
  @ViewChild("detalhes") detalhes;

  constructor(private modalService: ModalService, private ngModal: NgbModal) { }

  ngOnInit(): void {
    let modal = this;

    this.modalService.add(modal);
  }

  open() {
    this.ngModal.open(this.detalhes, { windowClass: 'dark-modal' });
  }


}
