import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 
import { AlertModalComponent } from './alert-modal.component';

@Injectable({ providedIn: 'root' })
export class AlertModalService {
  constructor(private modalService: BsModalService) {}

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<AlertModalComponent>bsModalRef.content).confirmResult;
  }
}
