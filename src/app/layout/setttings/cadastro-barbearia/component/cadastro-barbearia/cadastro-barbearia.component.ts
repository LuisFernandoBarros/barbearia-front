
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { FormValidations } from '../../../../../shared/form-validations';
import { ConsultaCepResponse } from '../../../../../shared/model/consulta-cep-response';
import { ConsultaCepService } from '../../../../../shared/services/consulta-cep.service';
import { CadastroBarbeariaService } from '../../cadastro-barbearia.service';

@Component({
  selector: 'app-cadastro-barbearia',
  templateUrl: './cadastro-barbearia.component.html',
  styleUrls: ['./cadastro-barbearia.component.css']
})
export class CadastroBarbeariaComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: CadastroBarbeariaService,
    private toastr: ToastrService,
    private cepService: ConsultaCepService) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nomeBarbearia: [null, [Validators.required]],
      cep: [null, [Validators.required, FormValidations.cepValidator]],
      rua: [null, [Validators.required]],
      cidade: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      estado: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      numero: [null, [Validators.required]],
      complemento: [null],          
      telefone: [null, [Validators.required, FormValidations.onlyNumbersValidator]],
      isWhastapp: [false]
    });
  }

  onSubmit() {
    if (FormValidations.isFormValido(this.formulario)) {
      this.service.save(this.formulario.value)
        .subscribe(resp => {
          console.log(resp),
            this.toastr.success("", "Salvo com sucesso!");
        },
          (err) => { this.toastr.error("mensagem", "Erro") });
    } else {
      this.toastr.error("Preencha os campos obrigatórios", "")
    }
  }

  onBlurCep() {
    let cep = this.formulario.value["cep"];
    const validacep = /^[0-9]{8}$/;
    if (cep && cep !== '' && validacep.test(cep)) {
      this.cepService.search(cep).subscribe(resp => {
        this.verifyConsultaCep(resp);
        this.setEndereco(resp);
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
      complemento: consultaCepResponse.complemento
    });
  }
}
