import { Component } from '@angular/core';
import { FiltersService } from '~/youtube/services/filters.service';
import { AuthService } from '~/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // @Output() dateSortEvent = new EventEmitter();
  // @Output() viewsSortEvent = new EventEmitter();
  // @Output() keywordFilterEvent = new EventEmitter<string>();
  // @Output() onSearchSubmitEvent = new EventEmitter<string>();

  public isFilterShown = false;
  public searchQuery = '';

  constructor(
    public filtersService: FiltersService,
    public authService: AuthService,
    private router: Router,
  ) {}

  public toggleFilter() {
    this.isFilterShown = !this.isFilterShown;
  }

  // dateSort() {
  //   this.dateSortEvent.emit();
  // }

  // viewsSort() {
  //   this.viewsSortEvent.emit();
  // }

  // filterByKeyword(keyword: string) {
  //   this.keywordFilterEvent.emit(keyword);
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
