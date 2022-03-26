import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PurchaseService } from 'src/app/service/purchase.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  ID: any;
  constructor(private service: PurchaseService, private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('id');
    if (this.ID != null && this.ID != 0) {
      this.UpdatePurchase(this.ID);
    }
  }

  ngOnInit(): void {
  }

  UpdatePurchase(itemID: any) {
    this.service.PurchaseByID(itemID).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.purchaseform = new FormGroup({
          itemID: new FormControl(this.EditData.itemID),
          productName: new FormControl(this.EditData.productName),
          department: new FormControl(this.EditData.department),
          price: new FormControl(this.EditData.price),
        });
      }
    })
  }

  purchaseform = new FormGroup({
    itemID: new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  AddPurchase() {
    if (this.purchaseform.valid) {
      this.service.AddPurchase(this.purchaseform.value).subscribe(result => {
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
    return this.purchaseform.get('itemID')
  }

  get productName() {
    return this.purchaseform.get('productName')
  }

  get department() {
    return this.purchaseform.get('department')
  }

  get price() {
    return this.purchaseform.get('price')
  }

}

