import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-show-cust',
  templateUrl: './show-cust.component.html',
  styleUrls: ['./show-cust.component.css']
})
export class ShowCustComponent implements OnInit {

  customerdata: any;
  constructor(private service: CustomerService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllCustomer().subscribe(result => {
      this.customerdata = result;
    });
  }
  delete(customerID: any) {
    if (confirm("Do You Want to Delete?")) {
      this.service.DeleteCustomerByID(customerID).subscribe(result => {
        this.LoadAll();
      })
    }
  }

}
