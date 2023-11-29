import { Component, EventEmitter, Output } from '@angular/core';
import { FiltersService } from '~/youtube/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() dateSortEvent = new EventEmitter();
  @Output() viewsSortEvent = new EventEmitter();
  @Output() keywordFilterEvent = new EventEmitter<string>();

  constructor(public filtersService: FiltersService) {}

  // dateSort() {
  //   this.dateSortEvent.emit();
  // }

  // viewsSort() {
  //   this.viewsSortEvent.emit();
  // }

  // filterByKeyword(e: Event) {
  //   this.keywordFilterEvent.emit((e.target as HTMLInputElement).value);
  // }
}
