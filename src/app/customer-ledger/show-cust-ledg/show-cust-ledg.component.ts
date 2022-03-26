import { Component, OnInit } from '@angular/core';
import { CustomerLedgerService } from 'src/app/service/customer-ledger.service';

@Component({
  selector: 'app-show-cust-ledg',
  templateUrl: './show-cust-ledg.component.html',
  styleUrls: ['./show-cust-ledg.component.css']
})
export class ShowCustLedgComponent implements OnInit {

  customerledgerdata: any;
  constructor(private service: CustomerLedgerService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllCustomerLedger().subscribe(result => {
      this.customerledgerdata = result;
    });
  }
  delete(invoicePaymentID: any) {
    if (confirm("Do You Want to Delete?")) {
      this.service.DeleteCustomerLedgerByID(invoicePaymentID).subscribe(result => {
        this.LoadAll();
      })
    }
  }

}
