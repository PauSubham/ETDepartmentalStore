import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductPurchaseService {

  apiurl='http://localhost:57454/api/ProductPurchase'

  constructor(private http:HttpClient) { }

  LoadAllProductPurchase(){
    return this.http.get(this.apiurl)
  }
  ProductPurchaseByID(itemID:any){
    return this.http.get(this.apiurl+'/'+itemID);
  }
  DeleteProductPurchaseByID(itemID:any){
    return this.http.delete(this.apiurl+'/'+itemID);
  }
  AddProductPurchase(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }
}
