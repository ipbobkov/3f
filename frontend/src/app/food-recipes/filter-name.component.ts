import { Component } from '@angular/core';

@Component({
  templateUrl: './filter-name.component.html',
  selector: 'app-filter-name-comp'
})

export class FilterNameComponent {
  filterStr = 'filter string';

  // Change filter
  change(): void {
    this.filterStr = '';
  }
}
