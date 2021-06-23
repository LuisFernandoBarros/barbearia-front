import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { Service } from '../../service';
import { Servico } from '../../servico';

@Component({
  selector: 'app-cadastro-servicos',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CadastroServicosComponent implements OnInit {

  constructor(private router: Router,
    private service: Service,
    private extractMsgService: ExtractMessageService,
    private toast: ToastrService) { }

  public servicos: Array<Servico> = [];
  private isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.service.getAll().subscribe(
      (resp) => {
        this.servicos = resp;
        this.isLoading = false
      },
      (err) => {
        this.isLoading = false;
        this.toast.error(this.extractMsgService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
      }
    );
  }

  goToEditar(id: number) {
    this.router.navigate([`servicos/${id}/editar`]);
  }


}
