import { Component, OnInit } from '@angular/core';
import { ProductPurchaseService } from 'src/app/service/product-purchase.service';

@Component({
  selector: 'app-show-prdct-prchs',
  templateUrl: './show-prdct-prchs.component.html',
  styleUrls: ['./show-prdct-prchs.component.css']
})
export class ShowPrdctPrchsComponent implements OnInit {
  productpurchasedata: any;
  constructor(private service: ProductPurchaseService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllProductPurchase().subscribe(result => {
      this.productpurchasedata = result;
    });
  }
  delete(customerID: any) {
    if (confirm("Do You Want to Delete?")) {
      this.service.DeleteProductPurchaseByID(customerID).subscribe(result => {
        this.LoadAll();
      })
    }
  }

}
