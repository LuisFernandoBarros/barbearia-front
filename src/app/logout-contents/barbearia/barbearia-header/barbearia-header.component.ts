import { Component, Input, OnInit } from '@angular/core';
import { ImageLogoService } from '../../../shared/services/image-logo.service';
import { Barbearia } from '../../../layout/setttings/cadastro-barbearia/barbearia';

@Component({
  selector: 'app-barbearia-header',
  templateUrl: './barbearia-header.component.html',
  styleUrls: ['./barbearia-header.component.scss']
})
export class BarbeariaHeaderComponent implements OnInit {

  @Input() barbearia: Barbearia;

  constructor(private logoService: ImageLogoService) { }

  ngOnInit(): void {
  }

  get urlLogo(): string {
    return this.logoService.urlLogo(this.barbearia.id.toString());    
  }
}
