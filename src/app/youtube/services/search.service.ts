import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { SearchResponse } from '~/shared/models/search-response.model';
import { SearchItem } from '~/shared/models/search-item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpService: HttpService) {}

  public videosData$ = new BehaviorSubject<SearchItem[]>([]);

  getVideos(query: string) {
    this.httpService.fetchVideos(query).subscribe((data: SearchResponse) => {
      const ids = data.items.map((item) => item.id.videoId).join(',');
      this.httpService.fetchVideo(ids).subscribe((data: any) => {
        this.videosData$.next(data.items);
      });
    });
  }

  getVideo(id: string) {
    return this.httpService.fetchVideo(id);
  }
}
