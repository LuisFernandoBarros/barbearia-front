import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';
import { Profissional } from '../../profissional';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private profissionais: Array<Profissional>;
  private isLoading: boolean

  constructor(private service: CadastroProfissionalService,
    private extractMsgService: ExtractMessageService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.service.get().subscribe(
      (resp) => {
        this.profissionais = resp;
        this.isLoading = false;
      },
      (err) => {
        this.toast.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER)),
          this.isLoading = false;
      }
    )
  }
}
