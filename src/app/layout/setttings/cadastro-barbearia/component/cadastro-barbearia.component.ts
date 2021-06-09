
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { FormValidations } from '../../../../shared/form-validations';
import { ConsultaCepResponse } from '../../../../shared/model/consulta-cep-response';
import { ConsultaCepService } from '../../../../shared/services/consulta-cep.service';
import { CadastroBarbeariaService } from '../cadastro-barbearia.service';

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
      whatsapp: [null, [FormValidations.onlyNumbersValidator]],
      cep: [null, [Validators.required, FormValidations.cepValidator]],
      rua: [null, [Validators.required]],
      cidade: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      estado: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      numero: [null, [Validators.required]],
      complemento: [null]
    });
  }

  onSubmit() {
    console.log(this.formulario);
    this.service.save(this.formulario.value)
      .subscribe(resp => {
        console.log(resp),
          this.toastr.success("", "Salvo com sucesso!");
      },
        (err) => { this.toastr.error("mensagem", "Erro") });
  }

  onBlurCep() {
    this.cepService.search("96835778").subscribe(resp => this.setEndereco(resp));

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
