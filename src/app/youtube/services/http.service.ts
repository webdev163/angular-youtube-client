import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse } from '~/shared/models/search-response.model';
import { SearchItem } from '~/shared/models/search-item.model';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public videosData = null;

  public fetchVideos(): Observable<SearchResponse> {
    const options = {
      params: {},
    };

    return this.http.get<SearchResponse>('search?part=snippet&maxResults=20&q=moscow&type=video', undefined).pipe(
      catchError((e) => {
        console.log(e);
        return EMPTY;
      }),
    );
  }

  public fetchVideo(ids: string): Observable<SearchItem> {
    const params = new HttpParams().set('id', ids).set('part', 'snippet,statistics');

    return this.http.get<SearchItem>('videos', { params }).pipe(
      catchError((e) => {
        console.log(e);
        return EMPTY;
      }),
    );
  }
}
