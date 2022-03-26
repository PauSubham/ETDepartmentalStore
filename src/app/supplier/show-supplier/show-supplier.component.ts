import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-show-supplier',
  templateUrl: './show-supplier.component.html',
  styleUrls: ['./show-supplier.component.css']
})
export class ShowSupplierComponent implements OnInit {

  supplierdata: any;
  constructor(private service: SupplierService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllSupplier().subscribe(result => {
      this.supplierdata = result;
    });
  }
  delete(customerID: any) {
    if (confirm("Do You Want to Delete?")) {
      this.service.DeleteSupplierByID(customerID).subscribe(result => {
        this.LoadAll();
      })
    }
  }

}