import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
import { AlertModalService } from '../../../../../shared/alert-modal/alert-modal.service';
import { CadastroProfissionalService } from '../../cadastro-profissional.service';
import { Profissional } from '../../profissional';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  public profissional: Profissional;
  public isLoading: boolean;

  constructor(private service: CadastroProfissionalService,
    private activedRoute: ActivatedRoute,
    private alertService: AlertModalService,
    private toastService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.activedRoute.params.subscribe(
      (param: any) => {
        this.service.getByID(param['id']).subscribe(
          (resp => { this.profissional = resp; this.isLoading = false; })
        )
      }
    )
  }

  deletar(): void {
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover este profissional?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.delete(this.profissional.id) : EMPTY)
      )
      .subscribe(
        resp => {
          this.toastService.success(MSG_PADRAO.DELETED_SUCESSO);
          this.router.navigate(['/profissional']);
        },
        error => {
          this.toastService.success(MSG_PADRAO.ERROR_SERVER);
        }
      );
  }
}
