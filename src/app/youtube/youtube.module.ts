import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SharedModule } from '~/shared/shared.module';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { VideoItemPageComponent } from './pages/video-item-page/video-item-page.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    CardDetailsComponent,
    SearchPageComponent,
    VideoItemPageComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule, SharedModule],
  exports: [SearchItemComponent, SearchResultsComponent, CardDetailsComponent],
})
export class YoutubeModule {}
