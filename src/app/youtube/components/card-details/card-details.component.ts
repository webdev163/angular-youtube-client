import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiltersService } from '~/youtube/services/filters.service';
import { SearchItem } from '~/shared/models/search-item.model';
import { Subscription } from 'rxjs';
import { SearchService } from '~/youtube/services/search.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit, OnDestroy {
  public id: string | null = null;
  public data!: SearchItem;
  public subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public filtersService: FiltersService,
    public searchService: SearchService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.subscription = this.searchService.getVideo(this.id).subscribe((data) => {
          if (data.items) this.data = data.items[0];
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
