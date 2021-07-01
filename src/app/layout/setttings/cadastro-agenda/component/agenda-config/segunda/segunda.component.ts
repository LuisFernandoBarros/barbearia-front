import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MSG_PADRAO } from '../../../../../../shared/services/msg-padrao.enum';
import { ExtractMessageService } from '../../../../../../shared/services/extract-message.service';
import { AgendaConfigService } from '../agenda-config.service';
import { Horario } from '../horario';
import { DiaSemana } from '../../../../../../shared/services/dia-semana';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.css']
})
export class SegundaComponent implements OnInit {

  public showCollapse = false;
  private formulario: FormGroup;
  public isLoading = false;
  public horario: Horario;
  @Input() horarios: Array<Horario>;
  @Input() diaSemana: DiaSemana


  constructor(private formBuilder: FormBuilder,
    private service: AgendaConfigService,
    private extractMsgService: ExtractMessageService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.setHorario();
    this.formulario = this.formBuilder.group({
      inicioManha: [this.horario.inicioManha],
      fimManha: [this.horario.fimManha],
      inicioTarde: [this.horario.inicioTarde],
      fimTarde: [this.horario.fimTarde],
      diaSemana: this.diaSemana.id
    });
  }

  setHorario() {
    this.horario = this.horarios.find((it) => {
      return it.diaSemana == this.diaSemana.id;
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.service.update(this.formulario.value).subscribe(
      (resp) => {
        this.toastService.success(MSG_PADRAO.SAVE_SUCCESS)
        this.isLoading = false;
      },
      (err) => {
        this.toastService.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
        this.isLoading = false;
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

  closeAtentimento(event) {
    this.isLoading = true;
    let isToClose = event.target.checked;
    this.service.closeAtendimento(this.diaSemana.id, isToClose).subscribe(
      (resp) => {
        this.horario = resp;
        this.toastService.success(MSG_PADRAO.SAVE_SUCCESS);
        this.isLoading = false;
      },
      (err) => {
        this.toastService.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
        this.isLoading = false;
      }
    );
  }
}