import { createAction, props } from '@ngrx/store';
import { SearchResponse } from '~/shared/models/search-response.model';
import { CustomItem } from '~/shared/models/custom-item.model';

export const FetchVideos = createAction('[Youtube] Fetch Videos', props<{ query: string }>());

export const FetchVideosSuccess = createAction('[Youtube] Fetch Videos Success', props<{ payload: SearchResponse }>());

export const FetchVideosFailed = createAction('[Youtube] Fetch Videos Failed');

export const AddCustomVideo = createAction('[Youtube] Custom Video', props<{ payload: CustomItem }>());
