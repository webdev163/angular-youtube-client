import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { CustomItem } from '~/shared/models/custom-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() data!: SearchItem;
  @Input() customData!: CustomItem;

  public id = '';

  ngOnInit(): void {
    if (this.data) this.id = this.data.id as string;
  }
}
