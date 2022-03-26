import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/service/purchase.service';

@Component({
  selector: 'app-show-purchase',
  templateUrl: './show-purchase.component.html',
  styleUrls: ['./show-purchase.component.css']
})
export class ShowPurchaseComponent implements OnInit {

  purchasedata: any;
  constructor(private service: PurchaseService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllPurchase().subscribe(result => {
      this.purchasedata = result;
    });
  }
  delete(customerID: any) {
    if (confirm("Do You Want to Delete?")) {
      this.service.DeletePurchaseByID(customerID).subscribe(result => {
        this.LoadAll();
      })
    }
  }

}
