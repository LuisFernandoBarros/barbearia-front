
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { FormValidations } from '../../../../../shared/form-validations';
import { ConsultaCepResponse } from '../../../../../shared/model/consulta-cep-response';
import { ConsultaCepService } from '../../../../../shared/services/consulta-cep.service';
import { CadastroBarbeariaService } from '../../cadastro-barbearia.service';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';

@Component({
  selector: 'app-cadastro-barbearia',
  templateUrl: './cadastro-barbearia.component.html',
  styleUrls: ['./cadastro-barbearia.component.css']
})
export class CadastroBarbeariaComponent implements OnInit {

  public formulario: FormGroup;
  public isLoadingCep = false;

  constructor(private formBuilder: FormBuilder,
    private service: CadastroBarbeariaService,
    private toastr: ToastrService,
    private cepService: ConsultaCepService,
    private extractService: ExtractMessageService) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      cep: [null, [Validators.required, FormValidations.cepValidator]],
      rua: [null, [Validators.required]],
      bairro: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      cidade: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      estado: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      numero: [null, [Validators.required]],
      complemento: [null],
      telefone: [null, [Validators.required, FormValidations.onlyNumbersValidator]]
    });
  }

  onSubmit() {
    if (FormValidations.isFormValido(this.formulario)) {
      this.service.save(this.formulario.value)
        .subscribe(resp => {          
            this.toastr.success(MSG_PADRAO.SAVE_SUCCESS);
        },
          (err) => { this.toastr.error(this.extractService.extractMessageFromError((err), MSG_PADRAO.ERROR_SERVER)) });
    } else {
      this.toastr.error("Preencha os campos obrigatórios", "")
    }
  }

  onBlurCep() {
    let cep = this.formulario.value["cep"];
    const validacep = /^[0-9]{8}$/;
    if (cep && cep !== '' && validacep.test(cep)) {
      this.isLoadingCep = true;
      this.cepService.search(cep).subscribe(resp => {
        this.verifyConsultaCep(resp);
        this.setEndereco(resp);
        this.isLoadingCep = false;
      },
        (err) => {
          this.toastr.error(null, MSG_PADRAO.ERROR_SEARCH_CEP);
          this.isLoadingCep = false;
        });
    }
  }

  verifyConsultaCep(resp: any) {
    if (resp.erro) {
      this.toastr.error("CEP está correto?", "Erro");
    }
  }

  setEndereco(consultaCepResponse: ConsultaCepResponse) {
    this.formulario.patchValue({
      rua: consultaCepResponse.logradouro,
      cidade: consultaCepResponse.localidade,
      estado: consultaCepResponse.uf,
      complemento: consultaCepResponse.complemento,
      bairro: consultaCepResponse.bairro
    });
  }
}
