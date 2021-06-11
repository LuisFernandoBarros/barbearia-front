
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormValidations } from '../../../../../shared/form-validations';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';


@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private service: CadastroProfissionalService) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, FormValidations.onlyCharsValidator]],            
      telefone: [null, [Validators.required, FormValidations.onlyNumbersValidator]],
      isWhastapp: [false]
    });
  } 
  
  onSubmit() {
    console.log(this.formulario.value);
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

}
