import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  public sortByDate: WritableSignal<'' | 'asc' | 'desc'> = signal('');
  public sortByViews: WritableSignal<'' | 'asc' | 'desc'> = signal('');
  public keyword = signal('');

  // constructor() {
  //   effect(() => {
  //     console.log(`The current sortByDate value is: ${this.sortByDate()}`);
  //   });
  // }

  public onDateSort() {
    this.sortByDate() === 'asc' ? this.sortByDate.set('desc') : this.sortByDate.set('asc');
    this.sortByViews.set('');
  }

  public onViewsSort() {
    this.sortByViews() === 'asc' ? this.sortByViews.set('desc') : this.sortByViews.set('asc');
    this.sortByDate.set('');
  }

  public onFilterByKeyword(e: Event) {
    this.keyword.set((e.target as HTMLInputElement).value);
  }
}
