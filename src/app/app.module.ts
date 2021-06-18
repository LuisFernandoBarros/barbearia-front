import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        NgbModalModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            progressBar: true
        })
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, NgbActiveModal, CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
