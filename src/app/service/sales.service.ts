import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  apiurl='http://localhost:57454/api/Sales'

  constructor(private http:HttpClient) { }

  LoadAllSales(){
    return this.http.get(this.apiurl)
  }
  SalesByID(customerID:any){
    return this.http.get(this.apiurl+'/'+customerID);
  }
  DeleteSalesByID(customerID:any){
    return this.http.delete(this.apiurl+'/'+customerID);
  }
  AddSales(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }
}