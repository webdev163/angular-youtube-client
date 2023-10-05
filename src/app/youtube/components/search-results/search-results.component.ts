import { Component } from '@angular/core';
import { FiltersService } from '~/youtube/services/filters.service';
import { SearchService } from '~/youtube/services/search.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '~/core/store/state.model';

import * as fromYoutube from '~/core/store/reducers/youtube.reducer';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  public data = this.store.select(fromYoutube.selectYoutubeVideos);
  public customData = this.store.select(fromYoutube.selectCustomVideos);
  public subscription!: Subscription;

  constructor(
    public filtersService: FiltersService,
    public searchService: SearchService,
    private store: Store<AppState>,
  ) {}

  // ngOnInit() {
  //   this.subscription = this.searchService.videosData$.subscribe((data) => {
  //     this.data = data;
  //   });
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
