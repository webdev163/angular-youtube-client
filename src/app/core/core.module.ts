import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, NewCardComponent, PageNotFoundComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, FiltersComponent, NewCardComponent],
})
export class CoreModule {}
