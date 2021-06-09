import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-barbearia',
  templateUrl: './cadastro-barbearia.component.html',
  styleUrls: ['./cadastro-barbearia.component.css']
})
export class CadastroBarbeariaComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nomeBarbearia: [null],
      telefone: [null],
    });
  }

}
