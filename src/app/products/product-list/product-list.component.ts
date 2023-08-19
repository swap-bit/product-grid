import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  rows:any;
  cosmeticProductList: any = [];
  
  constructor(
    private commServ: CommonService
  ) { }

  ngOnInit(): void {
    
    this.commServ.getProductList().subscribe({
      next: (response:any) => {
        console.log(response);
        this.rows = response;
        this.cosmeticProductList = response;
      },
      error: (error:any) => {
        console.log('Error Occured :'+error);
      },
    });

  }

  search(event:any) {
    const val = event.target.value.toLowerCase();
    const temp = this.cosmeticProductList.filter((productTable:any) => {
      return productTable.name.toLowerCase().includes(val);
    });
    this.rows = temp;
  }

  updateFilters(filters: any) {
    this.rows = this.commServ.applyFiltersAndSort(filters, this.cosmeticProductList);
  }

}
