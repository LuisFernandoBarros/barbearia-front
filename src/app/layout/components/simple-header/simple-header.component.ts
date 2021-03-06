import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { APP_INFO } from '../../../shared/services/app-info.enum';

@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrls: ['./simple-header.component.scss']
})
export class SimpleHeaderComponent implements OnInit {
  public appInfo = APP_INFO;

  constructor() { }

  ngOnInit(): void {
  }
}
