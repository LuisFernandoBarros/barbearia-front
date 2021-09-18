import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servico } from '../../../../setttings/cadastro-servicos/servico';
import { AgendamentoService } from '../../../../../logout-contents/barbearia/agendamento/agendamento.service';
import { Options } from 'ngx-animating-datepicker';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agendamento-manual',
  templateUrl: './agendamento-manual.component.html',
  styleUrls: ['./agendamento-manual.component.css']
})
export class AgendamentoManualComponent implements OnInit {

  form!: FormGroup;
  servicos: Array<Servico>;
  dates: Date;
  horarioSelected: string = undefined;
  horarioWtihClasses = [];
  isSalvandoAgendamento: boolean = false;

  // https://github.com/koenz/angular-datepicker
  datepickerOptions: Options = {
    selectMultiple: false, // Select multiple dates
    closeOnSelect: false, // Close datepicker when date(s) selected
    animationSpeed: 400, // Animation speed in ms
    easing: 'ease-in', // Easing type string
    hideRestDays: false, // Hide the rest days
    disableRestDays: true, // Disable the click on rest days
    hideNavigation: false, // Hide the navigation
    range: false, // Use range functionality
    currentDate: new Date(), // Tne current displayed date (month, year)
    timeoutBeforeClosing: 5000, // The timeout / delay before closing
    weekdayFormat: 'short', // "narrow", "short", "long"
    weekStart: 'monday', // Set the week start day,
  };

  constructor(private formBuilder: FormBuilder,
    private service: AgendamentoService,
    private toastService: ToastrService,
    private extractMsgService: ExtractMessageService,
    private router: Router) { }

  ngOnInit(): void {
    moment.locale('pt-BR');
    this.setServicos();
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      servico: ['', [Validators.required]]
    });
  }

  setServicos(): void {
    this.service.getAllServicosByUserLogado().subscribe(
      (resp) => {
        this.servicos = resp;
      }
    )
  }

  onChangeData() {
    this.horarioSelected = undefined;
    let idServico = this.form.value['servico'];
    if (idServico == undefined || idServico == null || idServico == '') {
      this.toastService.info("Primeiro selecione um serviço.");
      return;
    }

    this.horarioWtihClasses = [];
    let data = moment(this.dates[0]).format('YYYY-MM-DD');

    this.service.getEmptyHorariosByUserLogado(data, idServico).subscribe(
      (resp) => {
        if (resp.length == 0) {
          this.toastService.error("Sem horários disponíves. Selecione outra data.");
        } else {
          resp.forEach(horario => {
            this.horarioWtihClasses.push({ horario: horario, classe: "" })
          });
        }
      },
      (err) => {
        this.toastService.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER))
      }
    )
  };

  onChangeHorario(horarioSelected: string) {
    this.horarioSelected = horarioSelected;
    this.horarioWtihClasses.forEach(it => {
      if (it.horario != horarioSelected) {
        it.classe = "horario-disabled"
      } else {
        it.classe = "";
      }
    });
  };

  submit() {
    this.isSalvandoAgendamento = true;

    const toSave = {
      data: moment(this.dates[0]).format('YYYY-MM-DD'),
      horario: this.horarioSelected,
      profissional: null,
      servico: this.form.value["servico"],
      nome: this.form.value["nome"],
      telefone: this.form.value["telefone"],
      email: this.form.value["email"],
    };

    this.service.saveManualAgendamento(toSave).subscribe(
      (resp) => {
        this.toastService.success(MSG_PADRAO.SAVE_SUCCESS);
        this.isSalvandoAgendamento = false;
        this.router.navigate(['/agenda']);
      },
      (err) => {
        this.toastService.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
        this.isSalvandoAgendamento = false;
      });
  }
};