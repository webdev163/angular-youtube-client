import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  public sortByDate: '' | 'asc' | 'desc' = '';
  public sortByViews: '' | 'asc' | 'desc' = '';
  public keyword = '';

  public onDateSort() {
    this.sortByDate = this.sortByDate === 'asc' ? 'desc' : 'asc';
    this.sortByViews = '';
  }

  public onViewsSort() {
    this.sortByViews = this.sortByViews === 'asc' ? 'desc' : 'asc';
    this.sortByDate = '';
  }

  public onFilterByKeyword(e: Event) {
    this.keyword = (e.target as HTMLInputElement).value;
  }
}
