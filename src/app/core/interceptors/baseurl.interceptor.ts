import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, API_KEY } from '~/shared/constants';

@Injectable()
export class BaseurlInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedReq = request.clone({
      url: `${BASE_URL}/${request.url}`,
      params: request.params.set('key', API_KEY),
    });
    return next.handle(modifiedReq);
  }
}
