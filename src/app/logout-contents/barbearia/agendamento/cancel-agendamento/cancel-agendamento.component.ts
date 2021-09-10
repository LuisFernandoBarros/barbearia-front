import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertModalService } from '../../../../shared/alert-modal/alert-modal.service';
import { Barbearia } from '../../../../layout/setttings/cadastro-barbearia/barbearia';
import { BarbeariaService } from '../../barbearia.service';
import { switchMap, take } from 'rxjs/operators';
import { AgendamentoService } from '../agendamento.service';
import { EMPTY } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../shared/services/msg-padrao.enum';

@Component({
  selector: 'app-cancel-agendamento',
  templateUrl: './cancel-agendamento.component.html',
  styleUrls: ['./cancel-agendamento.component.css']
})
export class CancelAgendamentoComponent implements OnInit {

  public barbearia: Barbearia
  public identificacao!: FormGroup;
  public agendamentos: any[] = [];

  constructor(private activedRoute: ActivatedRoute,
    private barbeariaService: BarbeariaService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private service: AgendamentoService,
    private toastService: ToastrService,
    private extractMsgService: ExtractMessageService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      (param: any) => { this.getBarbearia(param['id']) }
    );

    this.identificacao = this.formBuilder.group({
      telefone: ['', Validators.required]
    });
  }

  get hasAgendamentos() {
    return this.agendamentos.length > 0;
  }

  previous(){
    this.agendamentos = [];
  }

  getBarbearia(barbeariaId: string) {
    this.barbeariaService.get(barbeariaId).subscribe(
      (resp) => {
        this.barbearia = resp;
      }
    );
  }

  getAgendamentoByCelular() {
    this.service.getByCelularCliente(this.identificacao.value["telefone"]).subscribe(
      (resp) => {
        if (resp.length == 0) {
          this.toastService.info("Nenhum agendamento encontrado para este telefone.");
        }
        this.agendamentos = resp;
      },
      (err) => {
        this.toastService.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
      }
    )
  }

  cancelar(id: string): void {
    const result$ = this.alertService.showConfirm('Confirmação', 'Você realmente quer cancelar seu agendamento?',
      'Sim', 'Não');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.cancelar(id, this.identificacao.value["telefone"]) : EMPTY)
      )
      .subscribe(
        resp => {
          this.toastService.success(MSG_PADRAO.DELETED_SUCESSO);
          this.agendamentos = [];
        },
        error => {
          this.toastService.error(this.extractMsgService.extractMessageFromError(error, MSG_PADRAO.ERROR_SERVER));
        }
      );
  }

}
