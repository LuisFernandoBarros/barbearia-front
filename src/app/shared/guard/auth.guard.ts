import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private cookieService: CookieService) {}

    canActivate() {
        if (this.cookieService.check('token')) {            
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
