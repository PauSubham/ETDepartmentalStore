import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.css']
})
export class AddSalesComponent implements OnInit {

  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  ID: any;
  constructor(private service: SalesService, private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('id');
    if (this.ID != null && this.ID != 0) {
      this.UpdateSales(this.ID);
    }
  }

  ngOnInit(): void {
  }

  UpdateSales(productID: any) {
    this.service.SalesByID(productID).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.salesform = new FormGroup({
          productID: new FormControl(this.EditData.productID),
          productName: new FormControl(this.EditData.productName),
          unit: new FormControl(this.EditData.unit),
          salePrice: new FormControl(this.EditData.salePrice),
          gst: new FormControl(this.EditData.gst),
        });
      }
    })
  }

  salesform = new FormGroup({
    productID: new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required),
    salePrice: new FormControl('', Validators.required),
    gst: new FormControl('', Validators.required),
  });

  AddSales() {
    if (this.salesform.valid) {
      this.service.AddSales(this.salesform.value).subscribe(result => {
        this.saveresponce = result;
        this.message = "Saved Successfully"
        this.messageclass = 'success'
      })
    } else {
      this.message = "Please Enter Valid Data"
      this.messageclass = 'error'
    };
  };

  get productID() {
    return this.salesform.get('productID')
  }

  get productName() {
    return this.salesform.get('productName')
  }

  get unit() {
    return this.salesform.get('unit')
  }

  get salePrice() {
    return this.salesform.get('salePrice')
  }

  get gst() {
    return this.salesform.get('gst')
  }

}

