import { Component } from '@angular/core';
import data from './data';
import { SearchResponse } from 'src/app/shared/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  public mockData: SearchResponse = data;
  public sortByDate: '' | 'asc' | 'desc' = '';
  public sortByViews: '' | 'asc' | 'desc' = '';
  public keyword: string = '';

  onDateSort() {
    this.sortByDate = this.sortByDate === 'asc' ? 'desc' : 'asc';
    this.sortByViews = '';
  }

  onViewsSort() {
    this.sortByViews = this.sortByViews === 'asc' ? 'desc' : 'asc';
    this.sortByDate = '';
  }

  onFilterByKeyword(str: string) {
    this.keyword = str;
  }
}
