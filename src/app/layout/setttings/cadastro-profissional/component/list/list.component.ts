import { Component, OnInit } from '@angular/core';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: CadastroProfissionalService) { }

  ngOnInit(): void {
    this.service.get().subscribe(
      (resp) => { console.log(resp) }
    )
  }
}
