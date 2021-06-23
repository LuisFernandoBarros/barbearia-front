import { Component, OnInit } from '@angular/core';
import { Profissional } from '../../profissional';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public profissional: Profissional;

  constructor() { }

  ngOnInit(): void {
    this.profissional = new Profissional(null, null, null, null, null);
  }
  

}
