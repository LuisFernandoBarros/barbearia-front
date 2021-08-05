import { Component, Input, OnInit } from '@angular/core';
import { Barbearia } from '../../../layout/setttings/cadastro-barbearia/barbearia';

@Component({
  selector: 'app-barbearia-header',
  templateUrl: './barbearia-header.component.html',
  styleUrls: ['./barbearia-header.component.scss']
})
export class BarbeariaHeaderComponent implements OnInit {

  @Input() barbearia: Barbearia;

  constructor() { }

  ngOnInit(): void {
  }

}
