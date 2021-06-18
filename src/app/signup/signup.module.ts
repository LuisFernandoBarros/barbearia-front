import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SignupService } from './signup.service';

@NgModule({
    imports: [
        CommonModule, 
        TranslateModule, 
        SignupRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [SignupComponent],
    providers: [SignupService]
})
export class SignupModule {}
