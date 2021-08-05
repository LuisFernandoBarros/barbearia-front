import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { RequestInterceptor } from './shared/services/request-interceptor';
import { ConfiguracaoBarbeariaGuard } from './shared/guard/configuracao-barbearia.guard';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        NgbModalModule,
        ModalModule.forRoot(),
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            progressBar: true
        })
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        NgbActiveModal,
        CookieService,
        BsModalService,
        ConfiguracaoBarbeariaGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true,
        },
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
