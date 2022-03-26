import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductSalesService } from 'src/app/service/product-sales.service';

@Component({
  selector: 'app-add-prdct-sale',
  templateUrl: './add-prdct-sale.component.html',
  styleUrls: ['./add-prdct-sale.component.css']
})
export class AddPrdctSaleComponent implements OnInit {

  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  ID: any;
  constructor(private service: ProductSalesService, private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('id');
    if (this.ID != null && this.ID != 0) {
      this.UpdateProductSales(this.ID);
    }
  }

  ngOnInit(): void {
  }

  UpdateProductSales(productID: any) {
    this.service.ProductSalesByID(productID).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.productsalesform = new FormGroup({
          productID: new FormControl(this.EditData.productID),
          productName: new FormControl(this.EditData.productName),
          hsnNumber: new FormControl(this.EditData.hsnNumber),
          unit: new FormControl(this.EditData.unit),
          salePrice: new FormControl(this.EditData.salePrice),
          gst: new FormControl(this.EditData.gst),
        });
      }
    })
  }

  productsalesform = new FormGroup({
    productID: new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    hsnNumber: new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required),
    salePrice: new FormControl('', Validators.required),
    gst: new FormControl('', Validators.required),
  });

  AddProductSales() {
    if (this.productsalesform.valid) {
      this.service.AddProductSales(this.productsalesform.value).subscribe(result => {
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
    return this.productsalesform.get('productID')
  }

  get productName() {
    return this.productsalesform.get('productName')
  }

  get hsnNumber() {
    return this.productsalesform.get('hsnNumber')
  }

  get unit() {
    return this.productsalesform.get('unit')
  }

  get salePrice() {
    return this.productsalesform.get('salePrice')
  }

  get gst() {
    return this.productsalesform.get('gst')
  }

}

