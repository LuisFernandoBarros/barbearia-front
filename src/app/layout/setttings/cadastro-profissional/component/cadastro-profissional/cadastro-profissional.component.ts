
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { FormValidations } from '../../../../../shared/form-validations';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';


@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements OnInit {

  formulario: FormGroup;
  isLoading: boolean = true;
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private service: CadastroProfissionalService) { }

  ngOnInit(): void {
    this.getProfissional();
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (FormValidations.isFormValido(this.formulario)) {
      this.isLoading = true;
      this.service.save(this.formulario.value)
        .subscribe(resp => {
          this.toastr.success(MSG_PADRAO.SAVE_SUCCESS);
          this.isLoading = false;
        },
          (err) => {
            this.toastr.error(MSG_PADRAO.USER_NOT_SAVE);
            this.isLoading = false;
          });
    } else {
      this.toastr.error(MSG_PADRAO.ALL_FIELDS_REQUIRED)
    }
  }

  getProfissional() {
    this.isLoading = true;
    this.service.get().subscribe(
      (resp) => {
        this.formulario.patchValue({
          nome: resp.nome,
          email: resp.email
        });
        this.isLoading = false;
      },
      (err) => {
        this.toastr.error(MSG_PADRAO.USER_ERROR_SEARCH);
        this.isLoading = false;
      }
    )
  }

  isFormValidAndNotLoading(): boolean {    
    return this.formulario.valid && !this.isLoading
  }
}