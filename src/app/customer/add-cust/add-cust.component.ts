import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.css']
})
export class AddCustComponent implements OnInit {
  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  CustID: any;
  constructor(private service: CustomerService, private route: ActivatedRoute) {
    this.CustID = this.route.snapshot.paramMap.get('id');
    if (this.CustID != null && this.CustID != 0) {
      this.UpdateCustomer(this.CustID);
    }
  }

  ngOnInit(): void {
  }

  UpdateCustomer(customerID: any) {
    this.service.CustomerByID(customerID).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.customerform = new FormGroup({
          customerID: new FormControl(this.EditData.customerID),
          customerCompanyName: new FormControl(this.EditData.customerCompanyName),
          contactPerson: new FormControl(this.EditData.contactPerson),
          address: new FormControl(this.EditData.address),
        });
      }
    })
  }

  customerform = new FormGroup({
    customerID: new FormControl('', Validators.required),
    customerCompanyName: new FormControl('', Validators.required),
    contactPerson: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  AddCustomer() {
    if (this.customerform.valid) {
      this.service.AddCustomer(this.customerform.value).subscribe(result => {
        this.saveresponce = result;
        this.message = "Saved Successfully"
        this.messageclass = 'success'
      })
    } else {
      this.message = "Please Enter Valid Data"
      this.messageclass = 'error'
    };
  };

  get customerID() {
    return this.customerform.get('customerID')
  }

  get customerCompanyName() {
    return this.customerform.get('customerCompanyName')
  }

  get contactPerson() {
    return this.customerform.get('contactPerson')
  }

  get address() {
    return this.customerform.get('address')
  }

}
