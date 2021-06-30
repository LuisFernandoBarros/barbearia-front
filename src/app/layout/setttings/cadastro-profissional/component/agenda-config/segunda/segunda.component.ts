import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MSG_PADRAO } from '../../../../../../shared/services/msg-padrao.enum';
import { DIA_SEMANA } from '../../../../../../shared/services/dia-semana.enum';
import { ExtractMessageService } from '../../../../../../shared/services/extract-message.service';
import { Profissional } from '../../../profissional';
import { AgendaConfigService } from '../agenda-config.service';
import { Horario } from '../horario';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.css']
})
export class ConfigSegundaComponent implements OnInit {

  public showCollapse = false;
  private formulario: FormGroup;
  @Input() profissional: Profissional

  constructor(private formBuilder: FormBuilder,
    private service: AgendaConfigService,
    private extractMsgService: ExtractMessageService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idProfissional: [this.profissional.id],
      inicioManha: [this.getHorario().inicioManha],
      fimManha: [this.getHorario().fimManha],
      inicioTarde: [this.getHorario().inicioTarde],
      fimTarde: [this.getHorario().fimTarde],
      diaSemana: DIA_SEMANA.SEGUNDA
    });
    this.getHorario();
  }

  getHorario(): Horario {
    return this.profissional.horarios.find((it) => {
      return it.diaSemana == DIA_SEMANA.SEGUNDA
    });
  }

  onSubmit() {
    this.service.save(this.formulario.value).subscribe(
      (resp) => { this.toastService.success(MSG_PADRAO.SAVE_SUCCESS) },
      (err) => {
        this.toastService.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER))
      }
    )
  }

  toogleCollapse() {
    if (this.showCollapse) {
      this.showCollapse = false
    } else {
      this.showCollapse = true;
    };
  }
}