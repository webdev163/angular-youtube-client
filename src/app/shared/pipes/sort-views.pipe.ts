import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortViews',
})
export class SortViewsPipe implements PipeTransform {
  transform(items: SearchItem[], order: '' | 'asc' | 'desc'): SearchItem[] {
    if (order === '') return items;

    if (order === 'asc') {
      return items.sort(
        (a, b) => new Date(a.statistics.viewCount).getTime() - new Date(b.statistics.viewCount).getTime(),
      );
    } else {
      return items.sort(
        (a, b) => new Date(b.statistics.viewCount).getTime() - new Date(a.statistics.viewCount).getTime(),
      );
    }
  }
}
