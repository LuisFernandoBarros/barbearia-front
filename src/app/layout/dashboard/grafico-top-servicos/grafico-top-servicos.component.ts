import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { DirectiveOptions, Options } from 'ngx-animating-datepicker';
import * as moment from 'moment';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from  '../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../shared/services/msg-padrao.enum';


@Component({
  selector: 'app-grafico-top-servicos',
  templateUrl: './grafico-top-servicos.component.html',
  styleUrls: ['./grafico-top-servicos.component.css']
})
export class GraficoTopServicosComponent implements OnInit {

  public showCollapse = false;
  public dataIni: Date[] = [new Date()];
  public dataFim: Date[] = [new Date()];
  public isLoading: boolean;


  // https://github.com/koenz/angular-datepicker
  directiveOptions: DirectiveOptions = {
    appendToBody: true, // Append Datepicker to body
    openDirection: 'bottom', // The direction it should open to
    closeOnBlur: true,  // Close the datepicker onBlur
    useAnimatePicker: true, // Use the regular datepicker or the animating one
  };

  datepickerOptions: Options = {
    selectMultiple: false, // Select multiple dates
    closeOnSelect: true, // Close datepicker when date(s) selected
    animationSpeed: 400, // Animation speed in ms
    easing: 'ease-in', // Easing type string
    hideRestDays: false, // Hide the rest days
    disableRestDays: true, // Disable the click on rest days
    hideNavigation: false, // Hide the navigation
    range: false, // Use range functionality
    currentDate: new Date(), // Tne current displayed date (month, year)
    timeoutBeforeClosing: 200, // The timeout / delay before closing
    weekdayFormat: 'short', // "narrow", "short", "long"
    weekStart: 'monday', // Set the week start day,
  };


  public labels: string[] = [];
  public dados: number[] = [];
  public tipo: string;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {      
      position: 'bottom',
    }
  };

  constructor(private service: DashboardService,
    private toastService: ToastrService,
    private msgErrorService: ExtractMessageService) { }

  ngOnInit(): void {
    moment.locale('pt-BR');
    this.tipo = 'pie';
    this.dataIni[0].setDate(this.dataIni[0].getDate()-30);
    this.onSubmit();    
  }

  toogleCollapse() {
    if (this.showCollapse) {
      this.showCollapse = false
    } else {
      this.showCollapse = true;
    };
  }

  onSubmit() {
    this.isLoading = true;
    let dataIniString = moment(this.dataIni[0]).format('YYYY-MM-DD');
    let dataFimString = moment(this.dataFim[0]).format('YYYY-MM-DD');
    this.labels = [];
    this.dados = [];    

    this.service.getTopServicos(dataIniString, dataFimString).subscribe(
      (resp) => {        
        Object.keys(resp).forEach((key) => {          
          this.labels.push(`${key} (${resp[key]})`);
          this.dados.push(resp[key]);
        }),
        this.isLoading = false;
      },
      (err) => { 
        this.toastService.error(this.msgErrorService.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));        
        this.isLoading = false;
      }
    )    
  }

  hasDados() {
    return this.labels.length > 0 &&
      this.dados.length > 0
  }
}