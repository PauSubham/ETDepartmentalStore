import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductPurchaseService } from 'src/app/service/product-purchase.service';

@Component({
  selector: 'app-add-prdct-prchs',
  templateUrl: './add-prdct-prchs.component.html',
  styleUrls: ['./add-prdct-prchs.component.css']
})
export class AddPrdctPrchsComponent implements OnInit {

  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  ID: any;
  constructor(private service: ProductPurchaseService, private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('id');
    if (this.ID != null && this.ID != 0) {
      this.UpdateProductPurchase(this.ID);
    }
  }

  ngOnInit(): void {
  }

  UpdateProductPurchase(itemID: any) {
    this.service.ProductPurchaseByID(itemID).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.productpurchaseform = new FormGroup({
          itemID: new FormControl(this.EditData.itemID),
          productName: new FormControl(this.EditData.productName),
          department: new FormControl(this.EditData.department),
          size: new FormControl(this.EditData.address),
          length: new FormControl(this.EditData.length),
          price: new FormControl(this.EditData.price),
        });
      }
    })
  }

  productpurchaseform = new FormGroup({
    itemID: new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    length: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  AddProductPurchase() {
    if (this.productpurchaseform.valid) {
      this.service.AddProductPurchase(this.productpurchaseform.value).subscribe(result => {
        this.saveresponce = result;
        this.message = "Saved Successfully"
        this.messageclass = 'success'
      })
    } else {
      this.message = "Please Enter Valid Data"
      this.messageclass = 'error'
    };
  };

  get itemID() {
    return this.productpurchaseform.get('itemID')
  }

  get productName() {
    return this.productpurchaseform.get('productName')
  }

  get department() {
    return this.productpurchaseform.get('department')
  }

  get size() {
    return this.productpurchaseform.get('size')
  }

  get length() {
    return this.productpurchaseform.get('length')
  }

  get price() {
    return this.productpurchaseform.get('price')
  }

}

