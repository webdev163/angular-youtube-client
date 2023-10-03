import { Component, OnDestroy, OnInit } from '@angular/core';
import { FiltersService } from '~/youtube/services/filters.service';
import { AuthService } from '~/auth/services/auth.service';
import { Router } from '@angular/router';
import { Subscription, Subject, filter, debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from '~/youtube/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  // @Output() dateSortEvent = new EventEmitter();
  // @Output() viewsSortEvent = new EventEmitter();
  // @Output() keywordFilterEvent = new EventEmitter<string>();
  // @Output() onSearchSubmitEvent = new EventEmitter<string>();

  public isFilterShown = false;
  public isAuth = false;

  public subject = new Subject<string>();
  public subscription!: Subscription;

  constructor(
    public filtersService: FiltersService,
    public authService: AuthService,
    public searchService: SearchService,
    private router: Router,
  ) {}

  public toggleFilter() {
    this.isFilterShown = !this.isFilterShown;
  }

  ngOnInit() {
    this.subscription = this.subject
      .pipe(
        filter((el) => el.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe((query) => {
        this.searchService.getVideos(query);
      });
    this.subscription.add(
      this.authService.isAuth$.subscribe((isAuth) => {
        this.isAuth = isAuth;
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  onInput(e: Event) {
    this.subject.next((e.target as HTMLInputElement).value);
  }

  login() {
    this.router.navigate(['auth', 'login']);
  }

  onLogoClick() {
    this.router.navigate(['search']);
  }

  onAdmin() {
    this.router.navigate(['search', 'admin']);
  }

  logout() {
    this.authService.clearAuth();
    this.router.navigate(['/']);
  }
}
