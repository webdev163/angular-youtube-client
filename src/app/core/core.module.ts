import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, PageNotFoundComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, FiltersComponent],
})
export class CoreModule {}
