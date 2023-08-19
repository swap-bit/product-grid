import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters-sorting',
  templateUrl: './filters-sorting.component.html',
  styleUrls: ['./filters-sorting.component.scss']
})
export class FiltersSortingComponent {

  @Output() filtersChanged = new EventEmitter<any>();

  selectedCategory: string = '';
  selectedPriceRange: string = '';
  selectedSortOption: string = '';

  applyFilters() {
    const filters = {
      category: this.selectedCategory,
      priceRange: this.selectedPriceRange,
      sortOption: this.selectedSortOption
    };

    this.filtersChanged.emit(filters);
  }
}
