import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class ConfiguracaoBarbeariaGuard implements CanActivate {
    constructor(private router: Router,
        private localStorageService: LocalStorageService) { }

    canActivate() {
        if (this.localStorageService.hasConfig("CADASTRAR_BARBEARIA")) {
            this.router.navigate(['/barbearia']);
            return false;
        };
        return true;
    }
}
