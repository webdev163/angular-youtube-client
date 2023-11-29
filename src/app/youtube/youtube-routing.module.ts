import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { VideoItemPageComponent } from './pages/video-item-page/video-item-page.component';
import { NewCardPageComponent } from './pages/new-card-page/new-card-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'admin', component: NewCardPageComponent },
  { path: ':id', component: VideoItemPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
