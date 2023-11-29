import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SearchService } from '~/youtube/services/search.service';

import * as YoutubeActions from '~/core/store/actions/youtube.actions';

@Injectable()
export class YoutubeEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService,
  ) {}

  loadVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeActions.FetchVideos),
      mergeMap((value) =>
        this.searchService.getVideos(value.query).pipe(
          map((videos) => YoutubeActions.FetchVideosSuccess({ payload: videos })),
          catchError(() => of(YoutubeActions.FetchVideosFailed)),
        ),
      ),
    );
  });
}
