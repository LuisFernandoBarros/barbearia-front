import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { Barbearia } from '../../barbearia';
import { CadastroBarbeariaService } from '../../cadastro-barbearia.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public isLoading: boolean;
  public barbearia: Barbearia;

  constructor(private service: CadastroBarbeariaService,
    private toastr: ToastrService,
    private extractMsg: ExtractMessageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.service.get().subscribe(
      (resp) => {
        this.barbearia = resp;        
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        this.toastr.error(this.extractMsg.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
      }
    )    
  }

}
