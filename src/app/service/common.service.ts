import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http:HttpClient) { }

  DEV_URL:string = "http://localhost:3000/";

  getProductList() {

    return this.http.get(this.DEV_URL + 'products').pipe(
      catchError(this.handleError)
    );
  }

  applyFiltersAndSort(filters:any, products:any) {
    let filteredProducts = [...products];

    // Apply category filter
    if (filters.category) {
      filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }

    // Apply price range filter
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    // Apply sorting
    if (filters.sortOption) {
      const [sortKey, sortOrder] = filters.sortOption.split('-');
      filteredProducts.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortKey].localeCompare(b[sortKey]);
        } else {
          return b[sortKey].localeCompare(a[sortKey]);
        }
      });
    }

    return filteredProducts;

  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError( () => 
      'Something bad happened; please try again later.');
  };

}
