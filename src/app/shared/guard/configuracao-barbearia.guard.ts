import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class ConfiguracaoBarbeariaGuard implements CanActivate {
    constructor(private router: Router,
        private localStorageService: LocalStorageService,
        private toastService: ToastrService) { }

    canActivate() {
        if (this.localStorageService.hasConfig("CADASTRAR_BARBEARIA")) {
            this.router.navigate(['/barbearia']);
            this.toastService.info("Primeiro, cadastre sua barbearia");
            return false;
        };
        return true;
    }
}
