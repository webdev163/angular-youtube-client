import { createReducer, on, createSelector, Action } from '@ngrx/store';
import { AppState, YoutubeState } from '../state.model';

import * as YoutubeActions from '../actions/youtube.actions';

export const initialState: YoutubeState = {
  videos: [],
  isFetched: false,
  error: '',
};

export const youtubeReducer = createReducer(
  initialState,
  on(
    YoutubeActions.FetchVideosSuccess,
    (state, { payload }): YoutubeState => ({
      ...state,
      videos: payload.items,
      isFetched: true,
    }),
  ),
  on(
    YoutubeActions.FetchVideosFailed,
    (state): YoutubeState => ({
      ...state,
      error: 'Failed to fetch videos',
    }),
  ),
);

export function reducer(state: YoutubeState | undefined, action: Action) {
  return youtubeReducer(state, action);
}

export const selectYoutubeStore = (state: AppState) => state.youtube;
export const selectYoutubeVideos = createSelector(selectYoutubeStore, (state: YoutubeState) => state.videos);
