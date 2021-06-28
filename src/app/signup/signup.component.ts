import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../router.animations';
import { FormValidations } from '../shared/form-validations';
import { ExtractMessageService } from '../shared/services/extract-message.service';
import { MSG_PADRAO } from '../shared/services/msg-padrao.enum';
import { SignupService } from './signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    public formulario: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private service: SignupService,
        private toastService: ToastrService,
        private msgExtractService: ExtractMessageService) { }

    ngOnInit(): void {
        this.formulario = this.formBuilder.group({
            nome: [null, [Validators.required, FormValidations.onlyCharsValidator]],
            email: [null, [Validators.required, Validators.email]],
            senha: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
            senhaRepeat: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), FormValidations.senhaEqualsTo('senha')]],
            telefone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20), FormValidations.onlyNumbersValidator]]
        });
    }

    onSubmit() {
        this.service.save(this.formulario.value).subscribe(
            (resp) => this.toastService.success(MSG_PADRAO.SAVE_SUCCESS),
            (err) => this.toastService.error(this.msgExtractService.extractMessageFromError(err, MSG_PADRAO.SIGNUP_ERROR))
        )
    }
}
