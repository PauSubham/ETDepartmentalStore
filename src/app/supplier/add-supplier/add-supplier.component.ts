import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  ID: any;
  constructor(private service: SupplierService, private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('id');
    if (this.ID != null && this.ID != 0) {
      this.UpdateSupplier(this.ID);
    }
  }

  ngOnInit(): void {
  }

  UpdateSupplier(supplierID: any) {
    this.service.SupplierByID(supplierID).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.supplierform = new FormGroup({
          supplierID: new FormControl(this.EditData.supplierID),
          supplierCompanyName: new FormControl(this.EditData.supplierCompanyName),
          contactPerson: new FormControl(this.EditData.contactPerson),
          address: new FormControl(this.EditData.address),
        });
      }
    })
  }

  supplierform = new FormGroup({
    supplierID: new FormControl('', Validators.required),
    supplierCompanyName: new FormControl('', Validators.required),
    contactPerson: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  AddSupplier() {
    if (this.supplierform.valid) {
      this.service.AddSupplier(this.supplierform.value).subscribe(result => {
        this.saveresponce = result;
        this.message = "Saved Successfully"
        this.messageclass = 'success'
      })
    } else {
      this.message = "Please Enter Valid Data"
      this.messageclass = 'error'
    };
  };

  get supplierID() {
    return this.supplierform.get('supplierID')
  }

  get supplierCompanyName() {
    return this.supplierform.get('supplierCompanyName')
  }

  get contactPerson() {
    return this.supplierform.get('contactPerson')
  }

  get address() {
    return this.supplierform.get('address')
  }

}
