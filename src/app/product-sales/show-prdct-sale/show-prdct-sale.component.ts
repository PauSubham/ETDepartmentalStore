import { Component, OnInit } from '@angular/core';
import { ProductSalesService } from 'src/app/service/product-sales.service';

@Component({
  selector: 'app-show-prdct-sale',
  templateUrl: './show-prdct-sale.component.html',
  styleUrls: ['./show-prdct-sale.component.css']
})
export class ShowPrdctSaleComponent implements OnInit {

  productsalesdata: any;
  constructor(private service: ProductSalesService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllProductSales().subscribe(result => {
      this.productsalesdata = result;
    });
  }
  delete(productID: any) {
    if (confirm("Do You Want to Delete?")) {
      this.service.DeleteProductSalesByID(productID).subscribe(result => {
        this.LoadAll();
      })
    }
  }

}
