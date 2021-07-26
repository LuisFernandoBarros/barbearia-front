import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MSG_PADRAO } from '../../../../../../shared/services/msg-padrao.enum';
import { ExtractMessageService } from '../../../../../../shared/services/extract-message.service';
import { AgendaConfigService } from '../agenda-config.service';
import { Expediente } from '../expediente';

@Component({
  selector: 'app-dia-semana',
  templateUrl: './dia-semana.component.html',
  styleUrls: ['./dia-semana.component.css']
})
export class DiaSemanaComponent implements OnInit {

  public showCollapse = false;
  private formulario: FormGroup;
  public isLoading = false;  
  @Input() expediente: Expediente;


  constructor(private formBuilder: FormBuilder,
    private service: AgendaConfigService,
    private extractMsgService: ExtractMessageService,
    private toastService: ToastrService) { }

  ngOnInit(): void {        
    this.formulario = this.formBuilder.group({
      inicioManha: [this.expediente.inicioManha],
      fimManha: [this.expediente.fimManha],
      inicioTarde: [this.expediente.inicioTarde],
      fimTarde: [this.expediente.fimTarde],
      diaSemana: this.expediente.diaSemana
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
    this.service.closeAtendimento(this.expediente.diaSemana, isToClose).subscribe(
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