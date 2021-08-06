import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { FormValidations } from '../../../../../shared/form-validations';
import { Service } from '../../service';
import { Servico } from '../../servico';
import { AlertModalService } from '../../../../../shared/alert-modal/alert-modal.service';
import { switchMap, take } from 'rxjs/operators';
import { ServicoUtils } from '../../servico-utils';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public formulario: FormGroup
  public isLoading: boolean;

  @Input()
  servico: Servico;

  constructor(private formBuilder: FormBuilder,
    private service: Service,
    private toast: ToastrService,
    private extractMsgService: ExtractMessageService,
    private alertService: AlertModalService,
    private servicoUtils: ServicoUtils) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      valor: [null, [Validators.required]],
      tempo: [null, [Validators.required]]
    });
    this.updateForm();
  }

  onSubmit() {
    this.isLoading = true;
    let request;
    if (this.isUpdate()) {
      request = this.getUpdateRequest();
    } else {
      request = this.getSaveRequest();
    }

    request.subscribe(
      (resp) => {
        this.isLoading = false;
        this.toast.success(MSG_PADRAO.SAVE_SUCCESS);
      },
      (err) => {
        this.toast.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER))
        this.isLoading = false;
      }
    );
  }


  toServico(): Servico {
    return {
      id: this.isUpdate() ? this.servico.id : null,
      descricao: this.formulario.value['nome'],
      tempo: this.formulario.value['tempo'],
      valor: this.formulario.value['valor']
    };
  }

  isUpdate(): boolean {
    return this.servico != undefined;
  }

  getUpdateRequest(): Observable<Servico> {
    return this.service.update(this.toServico());
  }

  getSaveRequest(): Observable<Servico> {
    return this.service.save(this.toServico());
  }

  updateForm() {
    if (this.formulario != undefined && this.servico != undefined) {
      this.formulario.patchValue({
        nome: this.servico.descricao,
        valor: this.servico.valor,
        tempo: this.servico.tempo,
      })
    }
  }

  isFormValido() {
    return FormValidations.isFormValido(this.formulario);
  }

  deletar(): void {
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover este serviço?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.delete(this.servico) : EMPTY)
      )
      .subscribe(
        resp => {
          this.sendMessage();
          this.toast.success(MSG_PADRAO.DELETED_SUCESSO);
        },
        error => {
          this.toast.success(MSG_PADRAO.ERROR_SERVER);
        }
      );
  }

  sendMessage(): void {
    this.servicoUtils.sendUpdate(this.servico);
  }
}
