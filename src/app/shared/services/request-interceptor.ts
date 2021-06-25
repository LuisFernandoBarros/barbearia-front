import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    //const clonedRequest = req.clone({ headers: req.headers.append('Authorization', 'Bearer 123') });          
    const clonedRequest = req.clone({
      headers: req.headers.append('Content-Type', 'application/json; charset=utf-8'),
      withCredentials: this.geWithoutCredentials(req.url)
    });


    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
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