import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-grafico-top-servicos',
  templateUrl: './grafico-top-servicos.component.html',
  styleUrls: ['./grafico-top-servicos.component.css']
})
export class GraficoTopServicosComponent implements OnInit {

  public showCollapse = false;


  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    }
  };  

  constructor() { }

  ngOnInit(): void {
    this.pieChartType = 'pie';
  }

  toogleCollapse() {
    if (this.showCollapse) {
      this.showCollapse = false
    } else {
      this.showCollapse = true;
    };
  }

}
