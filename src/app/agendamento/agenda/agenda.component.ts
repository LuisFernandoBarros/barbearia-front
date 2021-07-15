import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor(private service: AgendamentoService) { }

  ngOnInit(): void {
    this.service.get().subscribe(
      (resp) => console.log(resp)
    );
  }

  onSubmit(): void{
    // IMPLEMENTAR
  }

}
