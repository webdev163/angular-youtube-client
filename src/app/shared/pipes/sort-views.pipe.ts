import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortViews',
})
export class SortViewsPipe implements PipeTransform {
  transform(items: SearchItem[], order: '' | 'asc' | 'desc'): SearchItem[] {
    if (order === '') return items;

    if (order === 'asc') {
      return [...items].sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
    } else {
      return [...items].sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
    }
  }
}
