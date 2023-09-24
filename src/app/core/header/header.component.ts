import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isFilterShown: boolean = true;

  public toggleFilter() {
    this.isFilterShown = !this.isFilterShown;
  }
}
