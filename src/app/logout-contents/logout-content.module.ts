import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { LogoutContentsRoutingModule } from './logout-contents-routing.module';
import { BarbeariaModule } from './barbearia/barbearia.module';




@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    LogoutContentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BarbeariaModule
  ]
})
export class LogoutcontentsModule { }
