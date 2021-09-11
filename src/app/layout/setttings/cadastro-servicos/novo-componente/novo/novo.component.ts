import { Component, OnInit } from '@angular/core';
import { Servico } from '../../servico';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public servico: Servico;

  constructor() { }

  ngOnInit(): void {
    this.servico = new Servico(null, null, null, null);
  }
}
