import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../shared/services/msg-padrao.enum';
import { FormValidations } from '../../../shared/form-validations';
import { ChangePasswordService } from './change-password.service';

@Component({
  selector: 'app-cadastro-senha',
  templateUrl: './cadastro-senha.component.html',
  styleUrls: ['./cadastro-senha.component.css']
})
export class CadastroSenhaComponent implements OnInit {

  public formulario: FormGroup;
  public isSaving: boolean;

  constructor(private formBuilder: FormBuilder,
    private changePasswordService: ChangePasswordService,
    private toastService: ToastrService,
    private extractMsgError: ExtractMessageService) { }

  ngOnInit(): void {    
    this.formulario = this.formBuilder.group({
      senhaAtual: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      senhaNova: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      senhaRepeat: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), FormValidations.senhaEqualsTo('senhaNova')]],
    });
  }

  onSubmit(): void {
    this.isSaving = true;
    this.changePasswordService.update(this.formulario.get('senhaNova').value, this.formulario.get('senhaAtual').value).subscribe(
      (resp) => {
        this.toastService.success(MSG_PADRAO.SAVE_SUCCESS);
        this.isSaving = false;
      },
      (err) => {
        this.toastService.error(this.extractMsgError.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
        this.isSaving = false;
      }
    )
  }

}
