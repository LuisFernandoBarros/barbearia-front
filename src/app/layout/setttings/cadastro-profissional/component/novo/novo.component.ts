import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { FormValidations } from '../../../../../shared/form-validations';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';
import { Profissional } from '../../profissional';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {
  
  public formulario: FormGroup;
  public isLoading: boolean;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service: CadastroProfissionalService,
    private exctratMsgService: ExtractMessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.service.save(this.formulario.value)
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
}
