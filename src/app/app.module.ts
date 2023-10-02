import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseurlInterceptor } from './core/interceptors/baseurl.interceptor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BaseurlInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
