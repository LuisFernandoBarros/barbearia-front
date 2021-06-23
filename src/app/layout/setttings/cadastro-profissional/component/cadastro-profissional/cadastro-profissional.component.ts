
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { FormValidations } from '../../../../../shared/form-validations';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { Router } from '@angular/router';
import { Profissional } from '../../profissional';


@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements OnInit {

  @Input()
  profissional: Profissional;

  private formulario: FormGroup;
  private isLoading: boolean;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service: CadastroProfissionalService,
    private exctratMsgService: ExtractMessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [this.profissional.id],
      nome: [this.profissional.nome, [Validators.required, FormValidations.onlyCharsValidator]],
      email: [this.profissional.email, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    });
  }

  onSubmit() {
    let request;
    if (this.isUpdate()) {
      request = this.service.update(this.formulario.get('id').value, this.formulario.value)
    } else {
      request = this.service.save(this.formulario.value)
    }
    this.executeRequest(request);
  }

  executeRequest(request: any) {
    this.isLoading = true;
    request
      .subscribe(
        (resp) => {
          this.toastr.success(MSG_PADRAO.SAVE_SUCCESS);
          this.isLoading = false;
          this.router.navigate(['/profissional']);
        },
        (err) => {
          this.toastr.error(this.exctratMsgService.extractMessageFromError(err, MSG_PADRAO.USER_NOT_SAVE));
          this.isLoading = false;
        });
  }

  isUpdate() {
    return this.formulario.get('id').value != undefined;
  }

  isFormValidAndNotLoading(): boolean {
    return this.formulario.valid && !this.isLoading
  }
}