import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerLedgerService {
  apiurl='http://localhost:57454/api/CustomerLedger'

  constructor(private http:HttpClient) { }

  LoadAllCustomerLedger(){
    return this.http.get(this.apiurl)
  }
  CustomerLedgerByID(invoicePaymentID:any){
    return this.http.get(this.apiurl+'/'+invoicePaymentID);
  }
  DeleteCustomerLedgerByID(invoicePaymentID:any){
    return this.http.delete(this.apiurl+'/'+invoicePaymentID);
  }
  AddCustomerLedger(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }
}