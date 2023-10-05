import { SearchItem } from '~/shared/models/search-item.model';

export interface AppState {
  youtube: YoutubeState;
}

export interface YoutubeState {
  videos: SearchItem[];
  isFetched: boolean;
  error: string;
}
