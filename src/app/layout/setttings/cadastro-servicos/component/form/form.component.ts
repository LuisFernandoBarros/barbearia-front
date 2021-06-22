import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { FormValidations } from '../../../../../shared/form-validations';
import { Service } from '../../service';
import { Servico } from '../../servico';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public formulario: FormGroup

  @Input()
  servico: Servico;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private service: Service,
    private toast: ToastrService,
    private extractMsgService: ExtractMessageService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      valor: [null, [Validators.required, FormValidations.onlyNumbersValidator]],
      tempo: [null, [Validators.required, FormValidations.onlyNumbersValidator]]
    });
  }

  ngOnChanges(): void {
    this.updateForm();
  }

  onSubmit() {
    let request;
    if (this.isUpdate()) {
      request = this.getUpdateRequest();
    } else {
      request = this.getSaveRequest();
    }

    request.subscribe(
      (resp) => {
        this.toast.success(MSG_PADRAO.SAVE_SUCCESS);
        this.router.navigate([`servicos`]);
      },
      (err) => { this.toast.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER)) }
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
    return  this.servico != undefined;
  }

  getUpdateRequest(): Observable<Servico> {
    return this.service.update(this.toServico());
  }

  getSaveRequest(): Observable<Servico> {
    return this.service.save(this.toServico());
  }

  updateForm() {
    if (this.formulario != undefined) {
      this.formulario.patchValue({
        nome: this.servico.descricao,
        valor: this.servico.valor,
        tempo: this.servico.tempo,
      })
    }
  }
}
