import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerLedgerService } from 'src/app/service/customer-ledger.service';

@Component({
  selector: 'app-add-cust-ledg',
  templateUrl: './add-cust-ledg.component.html',
  styleUrls: ['./add-cust-ledg.component.css']
})
export class AddCustLedgComponent implements OnInit {
  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  ID: any;
  constructor(private service: CustomerLedgerService, private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('id');
    if (this.ID != null && this.ID != 0) {
      this.UpdateCustomerLedger(this.ID);
    }
  }

  ngOnInit(): void {
  }

  UpdateCustomerLedger(invoicePaymentID: any) {
    this.service.CustomerLedgerByID(invoicePaymentID).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.customerledgerform = new FormGroup({
          invoicePaymentID: new FormControl(this.EditData.invoicePaymentID),
          invoiceID: new FormControl(this.EditData.invoiceID),
          grandTotalAmount: new FormControl(this.EditData.grandTotalAmount),
          paidAmount: new FormControl(this.EditData.paidAmount),
          dueAmount: new FormControl(this.EditData.dueAmount),
          balanceAmount: new FormControl(this.EditData.balanceAmount),
        });
      }
    })
  }

  customerledgerform = new FormGroup({
    invoicePaymentID: new FormControl('', Validators.required),
    invoiceID: new FormControl('', Validators.required),
    grandTotalAmount: new FormControl('', Validators.required),
    paidAmount: new FormControl('', Validators.required),
    dueAmount: new FormControl('', Validators.required),
    balanceAmount: new FormControl('', Validators.required),
  });

  AddCustomerLedger() {
    if (this.customerledgerform.valid) {
      this.service.AddCustomerLedger(this.customerledgerform.value).subscribe(result => {
        this.saveresponce = result;
        this.message = "Saved Successfully"
        this.messageclass = 'success'
      })
    } else {
      this.message = "Please Enter Valid Data"
      this.messageclass = 'error'
    };
  };

  get invoicePaymentID() {
    return this.customerledgerform.get('invoicePaymentID')
  }

  get invoiceID() {
    return this.customerledgerform.get('invoiceID')
  }

  get grandTotalAmount() {
    return this.customerledgerform.get('grandTotalAmount')
  }

  get paidAmount() {
    return this.customerledgerform.get('paidAmount')
  }

  get dueAmount() {
    return this.customerledgerform.get('dueAmount')
  }

  get balanceAmount() {
    return this.customerledgerform.get('balanceAmount')
  }

}
