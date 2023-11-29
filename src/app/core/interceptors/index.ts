import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseurlInterceptor } from './baseurl.interceptor';

export const httpInterceptorsProviders = [{ provide: HTTP_INTERCEPTORS, useClass: BaseurlInterceptor, multi: true }];
