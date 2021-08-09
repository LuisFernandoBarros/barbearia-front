import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let clonedRequest;
    
    if (this.isWithoutContenType(req.url)) {
      clonedRequest = req.clone({
        withCredentials: this.geWithoutCredentials(req.url)
      });
    } else {
      clonedRequest = req.clone({
        headers: req.headers.append('Content-Type', 'application/json; charset=utf-8'),
        withCredentials: this.geWithoutCredentials(req.url)
      });
    }
    return next.handle(clonedRequest);
  }

  isWithoutContenType(url: string): boolean {

    let retorno = false;

    const WITHOUT_CONTENT_TYPE = [
      "upload-img"
    ];

    WITHOUT_CONTENT_TYPE.forEach(
      it => {
        if (url.includes(it)) {
          retorno = true
        }
      }
    )
    return retorno;
  }

  geWithoutCredentials(url: string): boolean {
    const NOT_NEED_CREDENTIALS = [
      "viacep.com.br"
    ];

    let withCredentials = true;

    NOT_NEED_CREDENTIALS.forEach(
      it => {
        if (url.includes(it)) {
          withCredentials = false;
        }
      }
    )
    return withCredentials;
  }
}