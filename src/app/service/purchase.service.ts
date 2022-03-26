import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  apiurl='http://localhost:57454/api/Purchases'

  constructor(private http:HttpClient) { }

  LoadAllPurchase(){
    return this.http.get(this.apiurl)
  }
  PurchaseByID(itemID:any){
    return this.http.get(this.apiurl+'/'+itemID);
  }
  DeletePurchaseByID(itemID:any){
    return this.http.delete(this.apiurl+'/'+itemID);
  }
  AddPurchase(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }
}