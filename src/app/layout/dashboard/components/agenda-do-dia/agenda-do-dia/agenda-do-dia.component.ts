import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../item-agendamento/agendamento';
import { ModalService } from '../service/modal-service';
import { AgendaDoDiaService } from './agenda-do-dia-service';

@Component({
  selector: 'app-agenda-do-dia',
  templateUrl: './agenda-do-dia.component.html',
  styleUrls: ['./agenda-do-dia.component.scss']
})
export class AgendaDoDiaComponent implements OnInit {

  constructor(private agendaDoDiaService: AgendaDoDiaService,
    private modalService: ModalService) { }

  public dataFormated: string;
  public agendamentos: Array<Agendamento> = [];

  ngOnInit(): void {
    this.setToday();
    this.agendaDoDiaService.getAgendamentosDia().subscribe(response => this.agendamentos = response);
  }

  private setToday() {
    let data = new Date();
    this.dataFormated = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  }

  openModal(id: number) {
    this.modalService.open(id.toString());
  }


}
