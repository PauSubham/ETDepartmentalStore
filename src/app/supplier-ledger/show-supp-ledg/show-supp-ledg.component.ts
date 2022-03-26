import { Component, OnInit } from '@angular/core';
import { SupplierLedgerService } from 'src/app/service/supplier-ledger.service';

@Component({
  selector: 'app-show-supp-ledg',
  templateUrl: './show-supp-ledg.component.html',
  styleUrls: ['./show-supp-ledg.component.css']
})
export class ShowSuppLedgComponent implements OnInit {

  supplierledgerdata: any;
  constructor(private service: SupplierLedgerService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllSupplierLedger().subscribe(result => {
      this.supplierledgerdata = result;
    });
  }
  delete(invoicePaymentID: any) {
    if (confirm("Do You Want to Delete?")) {
      this.service.DeleteSupplierLedgerByID(invoicePaymentID).subscribe(result => {
        this.LoadAll();
      })
    }
  }
}
