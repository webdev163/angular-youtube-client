import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SharedModule } from '~/shared/shared.module';

import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

@NgModule({
  declarations: [SearchItemComponent, SearchResultsComponent, CardDetailsComponent],
  imports: [CommonModule, YoutubeRoutingModule, SharedModule],
  exports: [SearchItemComponent, SearchResultsComponent, CardDetailsComponent],
})
export class YoutubeModule {}
