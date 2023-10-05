import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiltersService } from '~/youtube/services/filters.service';
import { SearchItem } from '~/shared/models/search-item.model';
import { Observable, Subscription } from 'rxjs';
import { SearchService } from '~/youtube/services/search.service';
import { CustomItem } from '~/shared/models/custom-item.model';
import { Store } from '@ngrx/store';
import { AppState } from '~/core/store/state.model';

import * as fromYoutube from '~/core/store/reducers/youtube.reducer';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit, OnDestroy {
  public id: string | null = null;
  public data!: SearchItem;
  public customData$!: Observable<CustomItem>;
  public subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public filtersService: FiltersService,
    public searchService: SearchService,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id && !this.id.includes('custom')) {
        this.subscription = this.searchService.getVideo(this.id).subscribe((data) => {
          if (data.items) this.data = data.items[0];
        });
      } else if (this.id && this.id.includes('custom')) {
        this.customData$ = this.store.select(
          fromYoutube.selectCustomVideoByIndex(Number(this.id.replace(/custom/, ''))),
        );
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
