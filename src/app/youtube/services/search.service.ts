import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { SearchResponse } from '~/shared/models/search-response.model';
import { SearchItem } from '~/shared/models/search-item.model';
import { BehaviorSubject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpService: HttpService) {}

  public videosData$ = new BehaviorSubject<SearchItem[]>([]);

  // getVideos(query: string) {
  //   return this.httpService.fetchVideos(query).subscribe((data: SearchResponse) => {
  //     const ids = data.items.map((item) => (item.id as { kind: string; videoId: string }).videoId).join(',');
  //     this.httpService.fetchVideo(ids).subscribe((data: SearchResponse) => {
  //       this.videosData$.next(data.items);
  //     });
  //   });
  // }

  getVideos(query: string) {
    return this.httpService.fetchVideos(query).pipe(
      switchMap((value: SearchResponse) => {
        const ids = value.items.map((item) => (item.id as { kind: string; videoId: string }).videoId).join(',');
        return this.httpService.fetchVideo(ids);
      }),
    );
  }

  getVideo(id: string) {
    return this.httpService.fetchVideo(id);
  }
}
