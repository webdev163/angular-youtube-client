import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() data!: SearchItem;

  public id = this.data?.id as string;
}
