import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ExtractMessageService } from '../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../shared/services/msg-padrao.enum';
import { Service } from '../service';
import { Servico } from '../servico';
import { ServicoUtils } from '../servico-utils';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent implements OnInit {

  public isLoading: boolean;
  public servicos: Array<Servico>;
  private subscriptionName: Subscription;

  constructor(private service: Service,
    private toastService: ToastrService,
    private extractErrorMessage: ExtractMessageService,
    private servicoUtils: ServicoUtils) { }

  ngOnInit(): void {

    this.subscriptionName = this.servicoUtils.getUpdate().subscribe
      (servico => {
        this.servicos = this.servicos.filter(obj => obj.id != servico.id);
      });

    this.isLoading = true;
    this.service.getAll().subscribe(
      (resp) => {
        this.servicos = resp;
        this.isLoading = false;
      },
      (err) => {
        this.toastService.error(this.extractErrorMessage.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER))
      }
    )
  }
}