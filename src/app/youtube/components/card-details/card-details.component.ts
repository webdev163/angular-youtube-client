import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiltersService } from '~/youtube/services/filters.service';
import { SearchItem } from '~/shared/models/search-item.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  public id: string | null = null;
  public data!: SearchItem;

  constructor(
    private route: ActivatedRoute,
    public filtersService: FiltersService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      // const data = this.filtersService.mockData.items.find((el) => el.id.videoId === this.id);
      // if (data) this.data = data;
    });
  }
}
