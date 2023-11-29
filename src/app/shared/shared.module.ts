import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBorderDirective } from './directives/card-border.directive';
import { SortDatePipe } from './pipes/sort-date.pipe';
import { SortViewsPipe } from './pipes/sort-views.pipe';
import { FilterByKeywordPipe } from './pipes/filter-by-keyword.pipe';

@NgModule({
  declarations: [CardBorderDirective, SortDatePipe, SortViewsPipe, FilterByKeywordPipe],
  imports: [CommonModule],
  exports: [CardBorderDirective, SortDatePipe, SortViewsPipe, FilterByKeywordPipe],
})
export class SharedModule {}
