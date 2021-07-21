import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { AgendaConfigService } from './agenda-config.service';
import { Expediente } from './expediente';
import { DiaSemanaService } from '../../../../../shared/services/dia-semana.service';

@Component({
  selector: 'app-agenda-config',
  templateUrl: './agenda-config.component.html',
  styleUrls: ['./agenda-config.component.css']
})
export class AgendaConfigComponent implements OnInit {

  public expedientes: Array<Expediente>;
  public isLoading: boolean;

  constructor(private service: AgendaConfigService,
    private extractErrorMessage: ExtractMessageService,
    private toastService: ToastrService,
    public diaSemanaService: DiaSemanaService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.service.getAllDiasSemanaByUserLogado().subscribe(
      (resp) => {
        this.expedientes = resp;
        this.isLoading = false;
      },
      (err) => {
        this.toastService.error(this.extractErrorMessage.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER))
      }
    )
  }
}