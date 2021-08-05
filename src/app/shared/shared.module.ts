import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  imports: [CommonModule],
  declarations: [    
    ErrorMsgComponent, 
    AlertModalComponent
  ],
  exports: [  
    ErrorMsgComponent,
    AlertModalComponent
  ]
})
export class SharedModule { }
