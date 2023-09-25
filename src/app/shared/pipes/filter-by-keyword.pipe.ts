import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filterByKeyword',
})
export class FilterByKeywordPipe implements PipeTransform {
  transform(items: SearchItem[], keyword: string): SearchItem[] {
    if (keyword === '') return items;

    return items.filter((item) =>
      item.snippet.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
