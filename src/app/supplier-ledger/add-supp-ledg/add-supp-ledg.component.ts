import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupplierLedgerService } from 'src/app/service/supplier-ledger.service';

@Component({
  selector: 'app-add-supp-ledg',
  templateUrl: './add-supp-ledg.component.html',
  styleUrls: ['./add-supp-ledg.component.css']
})
export class AddSuppLedgComponent implements OnInit {

  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  ID: any;
  constructor(private service: SupplierLedgerService, private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('id');
    if (this.ID != null && this.ID != 0) {
      this.UpdateSupplierLedger(this.ID);
    }
  }

  ngOnInit(): void {
  }

  UpdateSupplierLedger(invoicePaymentID: any) {
    this.service.SupplierLedgerByID(invoicePaymentID).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.supplierledgerform = new FormGroup({
          invoicePaymentID: new FormControl(this.EditData.invoicePaymentID),
          invoiceID: new FormControl(this.EditData.customerCompanyName),
          grandTotalAmount: new FormControl(this.EditData.grandTotalAmount),
          paidAmount: new FormControl(this.EditData.paidAmount),
          dueAmount: new FormControl(this.EditData.dueAmount),
        });
      }
    })
  }

  supplierledgerform = new FormGroup({
    invoicePaymentID: new FormControl('', Validators.required),
    invoiceID: new FormControl('', Validators.required),
    grandTotalAmount: new FormControl('', Validators.required),
    paidAmount: new FormControl('', Validators.required),
    dueAmount: new FormControl('', Validators.required),
  });

  AddSupplierLedger() {
    if (this.supplierledgerform.valid) {
      this.service.AddSupplierLedger(this.supplierledgerform.value).subscribe(result => {
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
    return this.supplierledgerform.get('invoicePaymentID')
  }

  get invoiceID() {
    return this.supplierledgerform.get('invoiceID')
  }

  get grandTotalAmount() {
    return this.supplierledgerform.get('grandTotalAmount')
  }

  get paidAmount() {
    return this.supplierledgerform.get('paidAmount')
  }

  get dueAmount() {
    return this.supplierledgerform.get('dueAmount')
  }

}
