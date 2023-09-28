import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: ':id', component: CardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
