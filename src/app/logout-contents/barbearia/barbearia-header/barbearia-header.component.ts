import { Component, Input, OnInit } from '@angular/core';
import { ImageLogoService } from '../../../shared/services/image-logo.service';
import { Barbearia } from '../../../layout/setttings/cadastro-barbearia/barbearia';
import { APP_INFO } from '../../../shared/services/app-info.enum';

@Component({
  selector: 'app-barbearia-header',
  templateUrl: './barbearia-header.component.html',
  styleUrls: ['./barbearia-header.component.scss']
})
export class BarbeariaHeaderComponent implements OnInit {

  @Input() barbearia: Barbearia;
  public appInfo = APP_INFO;  
  constructor(private logoService: ImageLogoService) { }

  ngOnInit(): void {    
  }

  get urlLogo(): string {
    return this.logoService.urlLogo(this.barbearia.id.toString());
  }

  get isLoading(): boolean {
    return this.barbearia == undefined;
  }
}