import { Injectable } from '@angular/core';
import { SearchResponse } from '~/shared/models/search-response.model';
import data from './data';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  public mockData: SearchResponse = data;
  public sortByDate: '' | 'asc' | 'desc' = '';
  public sortByViews: '' | 'asc' | 'desc' = '';
  public keyword: string = '';
  public isShowResults: boolean = false;

  constructor() {}

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

  public onSearch(query: string) {
    if (query) this.isShowResults = true;
  }
}
