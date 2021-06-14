import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      valor: [null, [Validators.required, FormValidations.onlyNumbersValidator]],
      tempo: [null, [Validators.required, FormValidations.onlyNumbersValidator]]
    });
  }

  onSubmit() {
    this.service.save(this.toServico()).subscribe(
      (resp) => {
        this.toast.success("", "Sucesso!");
        this.router.navigate([`servicos`]);
      },
      (err) => { this.toast.error("Tente novamente mais tarde", "Erro") }
    );
  }

  getTitle() {
    return !!this.servico.id ? "Editar" : "Novo";
  }

  toServico(): Servico {
    return {
      id: null,
      descricao: this.formulario.value['nome'],
      tempo: this.formulario.value['tempo'],
      valor: this.formulario.value['valor']
    };
  }

}
