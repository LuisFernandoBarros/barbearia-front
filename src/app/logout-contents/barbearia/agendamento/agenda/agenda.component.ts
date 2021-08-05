import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../shared/services/msg-padrao.enum';
import { Servico } from '../../../../layout/setttings/cadastro-servicos/servico'
import { AgendamentoService } from '../agendamento.service';
import { ActivatedRoute } from '@angular/router';
import { Barbearia } from '../../../../layout/setttings/cadastro-barbearia/barbearia';
import { AgendamentoAgendado } from '../agendamento-agendado';
import { BarbeariaService } from '../../barbearia.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  private formulario: FormGroup;
  public isLoading: boolean;
  public isSalvandoAgendamento: boolean;
  public isServicoEnable: boolean;
  public isHorariosEnable: boolean;
  public isDataEnable: boolean;
  public isAgendamentoAgendado: boolean;  
  public servicos: Array<Servico>;
  public horarios: Array<string>;
  public barbearia: Barbearia;
  public agendamento: AgendamentoAgendado;

  constructor(private service: AgendamentoService,
    private formBuilder: FormBuilder,
    private toastService: ToastrService,
    private extractMsgService: ExtractMessageService,
    private activedRoute: ActivatedRoute,
    private barbeariaService: BarbeariaService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.isServicoEnable = false;
    this.isHorariosEnable = false;
    this.isDataEnable = false;
    this.isAgendamentoAgendado = false;

    this.activedRoute.params.subscribe(
      (param: any) => { this.getProfissionais(param['id']) }
    )


  }

  // INDICA QUE O METODO callbackFazerOutroAgendamento() DEVE SER EXECUTADO NO CONTEXTO DESTE COMPONENTE
  public boundedCallbackFazerOutroAgendamento = this.callbackFazerOutroAgendamento.bind(this);
  callbackFazerOutroAgendamento(): void {
    this.isAgendamentoAgendado = false;
    this.resetForm();
  }

  getProfissionais(barbeariaId: string) {
    this.barbeariaService.get(barbeariaId).subscribe(
      (resp) => {
        this.formulario = this.formBuilder.group({
          nome: [null, [Validators.required]],
          profissonal: ['', [Validators.required]],
          servico: ['', [Validators.required]],
          data: [null, [Validators.required]],
          horario: ['', [Validators.required]],
          telefone: [null, [Validators.required]]
        });
        this.barbearia = resp;
        this.isLoading = false;
      }
    );
  }

  onChangeProfissional(): void {
    let profissionalSelected = this.formulario.value["profissonal"];
    this.service.getServicos(profissionalSelected).subscribe(
      (resp) => {
        this.servicos = resp;
        this.isServicoEnable = true;
      }
    )
  }

  onChangeServico(): void {
    this.isDataEnable = true;
    this.formulario.patchValue({      
      data: [''],
      horario: ['']
    });    
    this.isHorariosEnable = false;    
    this.isAgendamentoAgendado = false;    
  }

  onChangeData() {
    let data = this.formulario.value['data'];
    let idProfissional = this.formulario.value['profissonal'];
    let isServico = this.formulario.value['servico'];
    this.service.getHorarios(idProfissional, data, isServico).subscribe(
      (resp) => {
        if (resp.length == 0) {
          this.toastService.error("Sem horários disponíves. Selecione outra data.");
        } else {
          this.horarios = resp;
          this.isHorariosEnable = true;
        }
      }
    )
  }


  onSubmit(): void {
    if (this.formOk()) {
      this.isSalvandoAgendamento = true;
      this.service.save(this.formulario.value).subscribe(
        (resp) => {
          this.agendamento = resp;
          this.toastService.success(MSG_PADRAO.SAVE_SUCCESS)
          this.isSalvandoAgendamento = false;
          this.isAgendamentoAgendado = true
        },
        (err) => {
          this.toastService.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
          this.isSalvandoAgendamento = false;
        }
      )
    } else {
      this.toastService.error(MSG_PADRAO.ALL_FIELDS_REQUIRED);
    }
  }

  formOk() {
    return this.formulario.status != "INVALID";
  }

  resetForm() {
    this.formulario.patchValue({
      nome: [null],
      profissonal: [''],
      servico: [''],
      data: [''],
      horario: [''],
      telefone: ['']
    });
    this.isServicoEnable = false;
    this.isHorariosEnable = false;
    this.isDataEnable = false;
    this.isAgendamentoAgendado = false;
  }

}
