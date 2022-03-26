import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-show-sales',
  templateUrl: './show-sales.component.html',
  styleUrls: ['./show-sales.component.css']
})
export class ShowSalesComponent implements OnInit {

  salesdata: any;
  constructor(private service: SalesService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllSales().subscribe(result => {
      this.salesdata = result;
    });
  }
  delete(productID: any) {
    if (confirm("Do You Want to Delete?")) {
      this.service.DeleteSalesByID(productID).subscribe(result => {
        this.LoadAll();
      })
    }
  }

}
