import { Component, EventEmitter, Output } from '@angular/core';
import { FiltersService } from '~/youtube/services/filters.service';
import { AuthService } from '~/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // @Output() onDateSortEvent = new EventEmitter();
  // @Output() onViewsSortEvent = new EventEmitter();
  // @Output() onKeywordFilterEvent = new EventEmitter<string>();
  // @Output() onSearchSubmitEvent = new EventEmitter<string>();

  public isFilterShown: boolean = false;
  public searchQuery: string = '';

  constructor(
    public filtersService: FiltersService,
    public authService: AuthService,
    private router: Router,
  ) {}

  public toggleFilter() {
    this.isFilterShown = !this.isFilterShown;
  }

  // dateSort() {
  //   this.onDateSortEvent.emit();
  // }

  // viewsSort() {
  //   this.onViewsSortEvent.emit();
  // }

  // filterByKeyword(keyword: string) {
  //   this.onKeywordFilterEvent.emit(keyword);
  // }

  logout() {
    this.authService.clearAuth();
    this.router.navigate(['/']);
  }

  searchByKeyword(e: Event) {
    e.preventDefault();
    this.filtersService.onSearch(this.searchQuery);
  }
}
