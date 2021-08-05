import { DatePipe } from '@angular/common';
import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { interval, Subscription } from 'rxjs';
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
    private modalService: ModalService,
    private toastService: ToastrService,
    private datePipe: DatePipe,
    private cookieService: CookieService) { }

  public agendamentos: Array<Agendamento> = [];
  public data = new Date();
  public hasError = false;
  public isLoading = true;
  public dataAgenda: string;
  private totalAgendamento = 0;
  private updateSubscription: Subscription;

  ngOnInit(): void {
    this.getAgendamentos();
    this.updateSubscription = interval(10000).subscribe(
      (val) => {
        if (this.cookieService.check('token')) {
          this.refreshAgendamentos()
        }

      });
    this.dataAgenda = this.getDataIso();
  }

  openModal(id: number) {
    this.modalService.open(id.toString());
  }

  getDataIso(): string {
    return this.datePipe.transform(this.data, "yyyy-MM-dd");
  }

  // INDICA QUE O METODO refreshAgenda() DEVE SER EXECUTADO NO CONTEXTO DESTE COMPONENTE
  public boundedRefreshAgenda = this.refreshAgenda.bind(this);
  refreshAgenda(): void {
    this.specificDay();
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

  specificDay() {
    const specificDate = new Date(this.dataAgenda);
    specificDate.setDate(specificDate.getDate() + 1);
    this.data = specificDate;
    this.getAgendamentos();
  }

  isEmptyAgendamentos() {
    return !this.hasError && !this.isLoading && this.agendamentos.length == 0;
  }

  getAgendamentos() {
    this.hasError = false;
    this.isLoading = true;
    this.agendaDoDiaService.getAgendamentosDia(this.getDataIso())
      .subscribe(response => {
        this.agendamentos = response;
        this.dataAgenda = this.getDataIso();
        this.hasError = false;
        this.isLoading = false;
      },
        (err) => {
          this.hasError = true;
          this.isLoading = false;
        });
  }

  refreshAgendamentos(): void {
    this.agendaDoDiaService.getAllAgendamentos()
      .subscribe(response => {
        response.forEach(it => {
          if (this.isAgendamentoTodayAndNewAgendamento(it)) {
            this.agendamentos.push(it);
          }
        });
        if (this.hasNewAgendamento(response)) {
          this.toastService.info("Novo agendamento!");
        }
        this.totalAgendamento = response.length;
      });
  }

  isAgendamentoTodayAndNewAgendamento(newAgendamento: Agendamento): boolean {
    let isTodayAgendamento = this.datePipe.transform(newAgendamento.dataHora, "yyyy-MM-dd") == this.getDataIso();
    let isNewAgendamento = this.agendamentos.filter(it => it.id == newAgendamento.id).length == 0;
    return isTodayAgendamento && isNewAgendamento;
  }

  hasNewAgendamento(agendamentos: Array<Agendamento>): boolean {
    return this.totalAgendamento > 0 && agendamentos.length > this.totalAgendamento;
  }

  trackById(agendamento: Agendamento): string {
    return agendamento.atendidoEm
  }
}
