import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() onDateSortEvent = new EventEmitter();
  @Output() onViewsSortEvent = new EventEmitter();
  @Output() onKeywordFilterEvent = new EventEmitter<string>();

  public isFilterShown: boolean = true;

  public toggleFilter() {
    this.isFilterShown = !this.isFilterShown;
  }

  dateSort() {
    this.onDateSortEvent.emit();
  }

  viewsSort() {
    this.onViewsSortEvent.emit();
  }

  filterByKeyword(keyword: string) {
    this.onKeywordFilterEvent.emit(keyword);
  }
}
