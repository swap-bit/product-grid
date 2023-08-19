import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { FiltersSortingComponent } from './products/filters-sorting/filters-sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FiltersSortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
