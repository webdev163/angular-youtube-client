import { Component, EventEmitter, Output } from '@angular/core';
import { FiltersService } from '~/youtube/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() onDateSortEvent = new EventEmitter();
  @Output() onViewsSortEvent = new EventEmitter();
  @Output() onKeywordFilterEvent = new EventEmitter<string>();

  constructor(public filtersService: FiltersService) {}

  // dateSort() {
  //   this.onDateSortEvent.emit();
  // }

  // viewsSort() {
  //   this.onViewsSortEvent.emit();
  // }

  // filterByKeyword(e: Event) {
  //   this.onKeywordFilterEvent.emit((e.target as HTMLInputElement).value);
  // }
}
