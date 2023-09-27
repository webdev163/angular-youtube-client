import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NewCardComponent } from './components/new-card/new-card.component';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, NewCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, FiltersComponent, NewCardComponent],
})
export class CoreModule {}
