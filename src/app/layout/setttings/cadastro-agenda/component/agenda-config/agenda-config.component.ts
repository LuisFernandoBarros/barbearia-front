import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { AgendaConfigService } from './agenda-config.service';
import { Horario } from './horario';
import { DiaSemanaService } from '../../../../../shared/services/dia-semana.service';

@Component({
  selector: 'app-agenda-config',
  templateUrl: './agenda-config.component.html',
  styleUrls: ['./agenda-config.component.css']
})
export class AgendaConfigComponent implements OnInit {

  public horarios: Array<Horario>;
  public isLoading: boolean;

  constructor(private service: AgendaConfigService,
    private extractErrorMessage: ExtractMessageService,
    private toastService: ToastrService,
    private diaSemanaService: DiaSemanaService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.service.getAllDiasSemanaByUserLogado().subscribe(
      (resp) => {
        this.horarios = resp;
        this.isLoading = false;
      },
      (err) => {
        this.toastService.error(this.extractErrorMessage.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER))
      }
    )
  }
}