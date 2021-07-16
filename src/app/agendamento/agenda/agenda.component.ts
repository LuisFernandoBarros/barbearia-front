import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  private formulario: FormGroup;
  public isLoading: boolean;
  public profissionais: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']

  constructor(private service: AgendamentoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.service.get().subscribe(
      (resp) => {
        this.formulario = this.formBuilder.group({
          nome: [null],
          profissonal: ['']
        });
        this.profissionais = resp.profissionais;
        this.isLoading = false;
      }
    );
  }

  onChangeProfissional(e: any): void{
    // AQUI FALTA MOSTRAR OS SERVICOS APOS CARREGA-LOS
    let profissionalSelected = this.formulario.value["profissonal"];   
    this.service.getServicos(profissionalSelected).subscribe(
      (resp) => console.log(resp)
    )
  }

  onSubmit(): void {
    console.log(this.formulario.value);
    // IMPLEMENTAR
  }

}
