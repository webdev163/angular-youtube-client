import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { SearchResponse } from '~/shared/models/search-response.model';
import { SearchItem } from '~/shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpService: HttpService) {}

  public videosData: SearchItem[] = [];

  getVideos() {
    this.httpService.fetchVideos().subscribe((data: SearchResponse) => {
      const ids = data.items.map((item) => item.id.videoId).join(',');
      this.httpService.fetchVideo(ids).subscribe((data: any) => {
        this.videosData = data.items;
      });
    });
  }

  // getVideo() {
  //   this.httpService.fetchVideo().subscribe((data: SearchItem) => {});
  // }
}
