import { Injectable } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../alert/alert.component';

export enum AlertTypes {
    ERROR = 'danger',
    SUCCESS = 'success',
    WARNING = 'warning',
    INFO = 'info'
}

@Injectable({ providedIn: 'root' })
export class AlertService {

    constructor(public ngModal: NgbModal) { }

    private showAlert(message: string, type: AlertTypes) {
        const modalRef = this.ngModal.open(AlertComponent);
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.type = type;
    }

    showAlertDanger(message: string) {
        this.showAlert(message, AlertTypes.ERROR);
    }

    showAlertSucess(message: string) {
        this.showAlert(message, AlertTypes.SUCCESS);
    }

}