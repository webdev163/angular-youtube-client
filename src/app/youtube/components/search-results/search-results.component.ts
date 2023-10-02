import { Component, OnDestroy, OnInit } from '@angular/core';
import { FiltersService } from '~/youtube/services/filters.service';
import { SearchService } from '~/youtube/services/search.service';
import { SearchItem } from '~/shared/models/search-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public data: SearchItem[] = [];
  public subscription!: Subscription;

  constructor(
    public filtersService: FiltersService,
    public searchService: SearchService,
  ) {}

  ngOnInit() {
    this.subscription = this.searchService.videosData$.subscribe((data) => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
