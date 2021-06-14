import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidations } from '../../../../../shared/form-validations';
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
    private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      valor: [null, [Validators.required, FormValidations.onlyNumbersValidator]],
      tempo: [null, [Validators.required, FormValidations.onlyNumbersValidator]]
    });
  }

  onSubmit() {
    // CRIAR UMA SERVICE QUE SALVA OS SERVICOS ANTES DE REDIRECIONAR PRA LISTA
    this.router.navigate([`servicos`]);
  }

  getTitle(){
    return !!this.servico.id ? "Editar" : "Novo";
  }

}
