import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse } from '~/shared/models/search-response.model';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public videosData = null;

  public fetchVideos(query: string): Observable<SearchResponse> {
    const params = new HttpParams().set('maxResults', 20).set('part', 'snippet').set('type', 'video').set('q', query);

    return this.http.get<SearchResponse>('search', { params }).pipe(
      catchError((e) => {
        console.log('Error', e);
        return EMPTY;
      }),
    );
  }

  public fetchVideo(ids: string): Observable<SearchResponse> {
    const params = new HttpParams().set('id', ids).set('part', 'snippet,statistics');

    return this.http.get<SearchResponse>('videos', { params }).pipe(
      catchError((e) => {
        console.log('Error', e);
        return EMPTY;
      }),
    );
  }
}
