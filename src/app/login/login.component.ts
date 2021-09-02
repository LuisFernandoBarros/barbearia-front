import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../router.animations';
import { ExtractMessageService } from '../shared/services/extract-message.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { MSG_PADRAO } from '../shared/services/msg-padrao.enum';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    formulario: FormGroup;
    isLoading: boolean;

    constructor(public router: Router,
        private formBuilder: FormBuilder,
        private service: LoginService,
        private toastService: ToastrService,
        private extractMessageService: ExtractMessageService,
        private localStoreService: LocalStorageService) { }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            email: [null, [Validators.required]],
            senha: [null, [Validators.required]]
        });
        this.isLoading = false;
    }

    onSubmit() {
        this.isLoading = true;
        this.service.logar(this.formulario.value["email"], this.formulario.value["senha"])
            .subscribe(
                (resp) => {                    
                    this.toastService.info("Bem vindo!");
                    this.localStoreService.setProfissional(resp);
                    this.router.navigate(['agenda']);
                    this.isLoading = false;
                },
                (err) => {
                    this.toastService.error(
                        this.extractMessageService.extractMessageFromError(err, MSG_PADRAO.LOGIN_ERROR)                        
                    );
                    this.isLoading = false;
                }
            )
    }

    isFormValidAndNotLoading(): boolean {
        return this.formulario.valid && !this.isLoading
      }

}
