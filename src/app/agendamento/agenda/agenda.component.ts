import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Servico } from '../../layout/setttings/cadastro-servicos/servico' 
import { AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  private formulario: FormGroup;
  public isLoading: boolean;
  public isServicoEnable: boolean;
  public isHorariosEnable: boolean;
  public isDataEnable: boolean;
  public profissionais: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  public servicos: Array<Servico>;
  public horarios: Array<string>;

  constructor(private service: AgendamentoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.isServicoEnable = false;
    this.isHorariosEnable = false;
    this.isDataEnable = false;
    this.service.get().subscribe(
      (resp) => {
        this.formulario = this.formBuilder.group({
          nome: [null],
          profissonal: [''],
          servico: [''],
          data: [null],
          horario: [''],
          telefone: [null]
        });
        this.profissionais = resp.profissionais;
        this.isLoading = false;
      }
    );
  }

  onChangeProfissional(): void {    
    let profissionalSelected = this.formulario.value["profissonal"];
    this.service.getServicos(profissionalSelected).subscribe(
      (resp) => {
        this.servicos = resp;
        this.isServicoEnable = true;
      }
    )
  }

  onChangeServico(): void {    
    this.isDataEnable = true;
  }

  onChangeData(){
    let data = this.formulario.value['data'];
    this.service.getHorarios(1, data, 3).subscribe(
      (resp) => { 
        this.horarios = resp;
        this.isHorariosEnable = true;
      }
    )
  }

  onSubmit(): void {
    console.log(this.formulario.value);
    // IMPLEMENTAR
  }

}
