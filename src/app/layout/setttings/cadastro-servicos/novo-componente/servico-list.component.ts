import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../shared/services/msg-padrao.enum';
import { Service } from '../service';
import { Servico } from '../servico';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent implements OnInit {

  public isLoading: boolean;
  public servicos: Array<Servico>;

  constructor(private service: Service,
    private toastService: ToastrService,
    private extractErrorMessage: ExtractMessageService) { }

  ngOnInit(): void {
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