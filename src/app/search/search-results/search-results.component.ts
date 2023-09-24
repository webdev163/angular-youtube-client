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
}
