import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { YoutubeEffects } from './store/effects/youtube.effects';

import * as fromYoutube from './store/reducers/youtube.reducer';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ youtube: fromYoutube.reducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([YoutubeEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [HeaderComponent, FiltersComponent],
})
export class CoreModule {}
