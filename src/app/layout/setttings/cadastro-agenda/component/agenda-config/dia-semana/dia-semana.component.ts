import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MSG_PADRAO } from '../../../../../../shared/services/msg-padrao.enum';
import { ExtractMessageService } from '../../../../../../shared/services/extract-message.service';
import { AgendaConfigService } from '../agenda-config.service';
import { Expediente } from '../expediente';
import { DiaSemana } from '../../../../../../shared/services/dia-semana';

@Component({
  selector: 'app-dia-semana',
  templateUrl: './dia-semana.component.html',
  styleUrls: ['./dia-semana.component.css']
})
export class DiaSemanaComponent implements OnInit {

  public showCollapse = false;
  private formulario: FormGroup;
  public isLoading = false;
  public expediente: Expediente;
  @Input() expedientes: Array<Expediente>;
  @Input() diaSemana: DiaSemana


  constructor(private formBuilder: FormBuilder,
    private service: AgendaConfigService,
    private extractMsgService: ExtractMessageService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.setExpediente();
    this.formulario = this.formBuilder.group({
      inicioManha: [this.expediente.inicioManha],
      fimManha: [this.expediente.fimManha],
      inicioTarde: [this.expediente.inicioTarde],
      fimTarde: [this.expediente.fimTarde],
      diaSemana: this.diaSemana.id
    });
  }

  setExpediente() {
    this.expediente = this.expedientes.find((it) => {
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
        this.expediente = resp;
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