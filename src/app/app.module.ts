import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { NewCardComponent } from './core/new-card/new-card.component';
import { FiltersComponent } from './core/filters/filters.component';
import { CardDetailsComponent } from './search/card-details/card-details.component';
import { CardBorderDirective } from './shared/directives/card-border.directive';
import { SortDatePipe } from './shared/pipes/sort-date.pipe';
import { SortViewsPipe } from './shared/pipes/sort-views.pipe';
import { FilterByKeywordPipe } from './shared/pipes/filter-by-keyword.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    RegistrationComponent,
    LoginComponent,
    NewCardComponent,
    FiltersComponent,
    CardDetailsComponent,
    CardBorderDirective,
    SortDatePipe,
    SortViewsPipe,
    FilterByKeywordPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
