
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { FormValidations } from '../../../../../shared/form-validations';
import { ConsultaCepResponse } from '../../../../../shared/model/consulta-cep-response';
import { ConsultaCepService } from '../../../../../shared/services/consulta-cep.service';
import { CadastroBarbeariaService } from '../../cadastro-barbearia.service';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { Barbearia } from '../../barbearia';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../.../../../../../../shared/services/local-storage.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { ImageLogoService } from '../../../../../shared/services/image-logo.service';

@Component({
  selector: 'app-cadastro-barbearia',
  templateUrl: './cadastro-barbearia.component.html',
  styleUrls: ['./cadastro-barbearia.component.css']
})
export class CadastroBarbeariaComponent implements OnInit {

  public formulario: FormGroup;
  public isLoadingCep = false;
  public isLoading = false;
  public barbearia = new Barbearia(null, null, null, null, null, null, null, null, null, null, null, null);

  constructor(private formBuilder: FormBuilder,
    private service: CadastroBarbeariaService,
    private toastr: ToastrService,
    private cepService: ConsultaCepService,
    private extractService: ExtractMessageService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private logoService: ImageLogoService) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.service.get().subscribe(
      (resp) => {
        this.barbearia = resp;
        this.updateForm();
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        if (err.status == 404) {
          // NAO FAZER NADA, BARBEARIA NAO CADASTRADA
        } else {
          this.toastr.error(this.extractService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
        }
      }
    )

    this.formulario = this.formBuilder.group({
      id: [null],
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

  updateForm() {
    this.formulario.patchValue({
      id: this.barbearia.id,
      nome: this.barbearia.nome,
      cep: this.barbearia.cep,
      rua: this.barbearia.rua,
      bairro: this.barbearia.bairro,
      cidade: this.barbearia.cidade,
      estado: this.barbearia.estado,
      numero: this.barbearia.numero,
      complemento: this.barbearia.complemento,
      telefone: this.barbearia.telefone,
    });
  }

  onSubmit() {
    if (FormValidations.isFormValido(this.formulario)) {
      this.getRequest()
        .subscribe(resp => {
          this.toastr.success(MSG_PADRAO.SAVE_SUCCESS);
          this.localStorageService.removeConfig("CADASTRAR_BARBEARIA");
          this.router.navigate(['/agenda']);
        },
          (err) => { this.toastr.error(this.extractService.extractMessageFromError((err), MSG_PADRAO.ERROR_SERVER)) });
    } else {
      this.toastr.error("Preencha os campos obrigatórios", "")
    }
  }

  getRequest(): Observable<Barbearia> {
    if (this.isUpdate()) {
      return this.service.update(this.formulario.value);
    } else {
      return this.service.save(this.formulario.value);
    }
  }

  isUpdate(): boolean {
    return this.barbearia.id != null;
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

  linkAgendamento() {
    if (this.barbearia.linkAgendamento == null || this.barbearia.linkAgendamento.length <= 0) {
      return "Primeiro cadastre a barbearia para gerar o link";
    }
    //http://localhost:4200/#/logout-contents/barbearia/agendamento/c51ce410c124a10e0db5e4b97fc2af39
    return `${environment.DOMINIO}/#/logout-contents/barbearia/agendamento-steps/${this.barbearia.linkAgendamento}`;
  }

  get urlLogo(): string {
    return this.logoService.urlLogo(this.barbearia.id.toString());
  }
}
