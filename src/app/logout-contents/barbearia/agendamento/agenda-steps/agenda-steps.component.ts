import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Servico } from '../../../../layout/setttings/cadastro-servicos/servico';
import { Barbearia } from '../../../../layout/setttings/cadastro-barbearia/barbearia';
import { BarbeariaService } from '../../barbearia.service';
import { AgendamentoService } from '../agendamento.service';
import { ToastrService } from 'ngx-toastr';
import { Options } from 'ngx-animating-datepicker';
import * as moment from 'moment';


@Component({
  selector: 'app-agenda-steps',
  templateUrl: './agenda-steps.component.html',
  styleUrls: ['./agenda-steps.component.css']
})
export class AgendaStepsComponent implements OnInit {

  identificacao!: FormGroup;
  servico!: FormGroup;
  horario!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;
  barbearia: Barbearia
  servicos: Array<Servico>;
  horarios: Array<string>;
  dates: Date;

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
    private activedRoute: ActivatedRoute,
    private barbeariaService: BarbeariaService,
    private service: AgendamentoService,
    private toastService: ToastrService) { }

  ngOnInit() {
    moment.locale('pt-BR');

    this.activedRoute.params.subscribe(
      (param: any) => { this.getProfissionais(param['id']) }
    )

    this.identificacao = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required]
    });
    this.servico = this.formBuilder.group({
      profissonal: ['', [Validators.required]],
      servico: ['', [Validators.required]],
    });
    this.horario = this.formBuilder.group({
      data: ['', [Validators.required]],
      horario: ['', [Validators.required]],
    });
  }

  getProfissionais(barbeariaId: string) {
    this.barbeariaService.get(barbeariaId).subscribe(
      (resp) => {
        this.barbearia = resp;
      }
    );
  }

  onChangeProfissional(): void {
    let profissionalSelected = this.servico.value["profissonal"];
    this.service.getServicos(profissionalSelected).subscribe(
      (resp) => {
        this.servicos = resp;
      }
    )
  }

  onChangeServico(): void {
    this.horario.patchValue({
      data: [''],
      horario: ['']
    });
  }

  onChangeData() {
    let data = moment(this.dates[0]).format('YYYY-MM-DD');
    let idProfissional = this.servico.value['profissonal'];
    let isServico = this.servico.value['servico'];
    this.service.getHorarios(idProfissional, data, isServico).subscribe(
      (resp) => {
        if (resp.length == 0) {
          this.toastService.error("Sem horários disponíves. Selecione outra data.");
        } else {
          this.horarios = resp;
        }
      }
    )
  }


  get personal() { return this.identificacao.controls; }
  get education() { return this.horario.controls; }
  get address() { return this.servico.controls; }

  next() {
    /*if (this.step == 1) {
      this.personal_step = true;
      if (this.identificacao.invalid) { return }
      this.step++
    }
    if (this.step == 2) {
      this.address_step = true;
      if (this.servico.invalid) { return }
      this.step++;
    }*/
    this.step++;
  }
  previous() {
    this.step--
    /*if (this.step == 1) {
      this.personal_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }*/
  }
  submit() {
    if (this.step == 3) {
      //this.education_step = true;
      if (this.horario.invalid) { return }
    }


    const toSave = {
      data: moment(this.dates[0]).format('YYYY-MM-DD'),
      horario: this.horario.value['horario'],
      profissional: this.servico.value["profissonal"],
      servico: this.servico.value["servico"],
      nome: this.identificacao.value["nome"],
      telefone: this.identificacao.value["telefone"],
      //email: this.identificacao.value["email"], //AINDA NAO SALVA BANCO
    }

    console.log(toSave);
  }





}
