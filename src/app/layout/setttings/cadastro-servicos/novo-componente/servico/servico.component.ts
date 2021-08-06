import { Component, Input, OnInit } from '@angular/core';
import { Servico } from '../../servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  public showCollapse: boolean;
  @Input() servico: Servico;

  constructor() { }

  ngOnInit(): void {

  }


  toogleCollapse() {
    if (this.showCollapse) {
      this.showCollapse = false
    } else {
      this.showCollapse = true;
    };
  }
}
