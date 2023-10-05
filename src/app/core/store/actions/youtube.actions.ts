import { createAction, props } from '@ngrx/store';
import { SearchResponse } from '~/shared/models/search-response.model';

export const FetchVideos = createAction('[Youtube] Fetch Videos', props<{ query: string }>());

export const FetchVideosSuccess = createAction('[Youtube] Fetch Videos Success', props<{ payload: SearchResponse }>());

export const FetchVideosFailed = createAction('[Youtube] Fetch Videos Failed');
