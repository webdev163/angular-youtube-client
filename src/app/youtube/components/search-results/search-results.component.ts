import { Component } from '@angular/core';
import { FiltersService } from '~/youtube/services/filters.service';
import { SearchService } from '~/youtube/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  constructor(
    public filtersService: FiltersService,
    public searchService: SearchService,
  ) {}

  public onFetch() {
    this.searchService.getVideos();
    console.log(this.searchService.videosData);
  }
}
