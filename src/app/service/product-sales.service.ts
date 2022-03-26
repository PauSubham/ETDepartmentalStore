import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductSalesService {

  apiurl='http://localhost:57454/api/ProductSale'

  constructor(private http:HttpClient) { }

  LoadAllProductSales(){
    return this.http.get(this.apiurl)
  }
  ProductSalesByID(productID:any){
    return this.http.get(this.apiurl+'/'+productID);
  }
  DeleteProductSalesByID(productID:any){
    return this.http.delete(this.apiurl+'/'+productID);
  }
  AddProductSales(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }
}
