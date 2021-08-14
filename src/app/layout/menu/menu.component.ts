import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private cookieService: CookieService,
    private router: Router,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }



  logout() {
    this.cookieService.delete('token');
    this.localStorageService.clear();
    this.router.navigate(['/login']);
  }

  get linkSuporte (){
    return "https://api.whatsapp.com/send?phone=555185375881&text=Ol%C3%A1!%20Preciso%20de%20ajuda."
  }
}
