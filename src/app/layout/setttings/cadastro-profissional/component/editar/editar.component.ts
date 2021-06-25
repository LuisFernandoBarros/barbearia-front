import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { FormValidations } from '../../../../../shared/form-validations';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';
import { Profissional } from '../../profissional';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public profissional: Profissional;
  public isLoading: boolean;

  constructor(private activedRoute: ActivatedRoute,
    private service: CadastroProfissionalService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private exctratMsgService: ExtractMessageService,
    private router: Router) { }

  private formulario: FormGroup;

  ngOnInit(): void {
    this.isLoading = true;
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, FormValidations.onlyCharsValidator]],
      email: [null, [Validators.required, Validators.email]]
    });
    this.activedRoute.params.subscribe(
      (param: any) => { this.getProfissional(param['id']) }
    )
  }

  onSubmit() {
    this.service.update(this.formulario.get('id').value, this.formulario.value)
      .subscribe(
        (resp) => {
          this.toastr.success(MSG_PADRAO.SAVE_SUCCESS);
          this.isLoading = false;
          this.router.navigate(['/profissional']);
        },
        (err) => {
          this.toastr.error(this.exctratMsgService.extractMessageFromError(err, MSG_PADRAO.USER_NOT_SAVE));
          this.isLoading = false;
        });
  }

  getProfissional(id: number) {
    this.service.getByID(id).subscribe(
      (resp) => {
        this.formulario.patchValue({
          id: resp.id,
          nome: resp.nome,
          email: resp.email,
        })
        this.isLoading = false;
      }
    );
  }
}
