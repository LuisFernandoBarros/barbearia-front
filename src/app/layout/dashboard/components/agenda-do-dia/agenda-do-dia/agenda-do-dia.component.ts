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

  public agendamentos: Array<Agendamento> = [];
  public data = new Date();
  public hasError = false;
  public isLoading = true;

  ngOnInit(): void {
    this.getAgendamentos();
  }

  openModal(id: number) {
    this.modalService.open(id.toString());
  }

  getDataIso() {
    return ((this.data.getFullYear())) + "-" + ((this.data.getMonth() + 1)) + "-" + this.data.getDate();
  }

  nextDay() {
    const tomorrow = new Date(this.data);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.data = tomorrow;
    this.getAgendamentos();
  }

  previusDay() {
    const yesterday = new Date(this.data);
    yesterday.setDate(yesterday.getDate() - 1);
    this.data = yesterday;
    this.getAgendamentos();
  }

  isEmptyAgendamentos(){
    return !this.hasError && !this.isLoading && this.agendamentos.length == 0;
  }

  getAgendamentos() {
    this.hasError = false;
    this.isLoading = true;
    this.agendaDoDiaService.getAgendamentosDia(this.getDataIso())
      .subscribe(response => {
        this.agendamentos = response,
          this.hasError = false;
          this.isLoading = false;
      },
        (err) => {
          this.hasError = true;
          this.isLoading = false;
        });
  }
}
