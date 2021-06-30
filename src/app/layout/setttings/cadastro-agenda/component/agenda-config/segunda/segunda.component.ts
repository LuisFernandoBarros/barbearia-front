import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MSG_PADRAO } from '../../../../../../shared/services/msg-padrao.enum';
import { DIA_SEMANA } from '../../../../../../shared/services/dia-semana.enum';
import { ExtractMessageService } from '../../../../../../shared/services/extract-message.service';
import { AgendaConfigService } from '../agenda-config.service';
import { Horario } from '../horario';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.css']
})
export class SegundaComponent implements OnInit {

  public showCollapse = false;
  private formulario: FormGroup;
  @Input() horario: Horario

  constructor(private formBuilder: FormBuilder,
    private service: AgendaConfigService,
    private extractMsgService: ExtractMessageService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({      
      inicioManha: [this.horario.inicioManha],
      fimManha: [this.horario.fimManha],
      inicioTarde: [this.horario.inicioTarde],
      fimTarde: [this.horario.fimTarde],
      diaSemana: DIA_SEMANA.SEGUNDA
    });    
  }

  onSubmit() {
    this.service.update(this.formulario.value).subscribe(
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