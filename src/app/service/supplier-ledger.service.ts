import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierLedgerService {

  apiurl='http://localhost:57454/api/SupplierLedger'

  constructor(private http:HttpClient) { }

  LoadAllSupplierLedger(){
    return this.http.get(this.apiurl)
  }
  SupplierLedgerByID(invoicePaymentID:any){
    return this.http.get(this.apiurl+'/'+invoicePaymentID);
  }
  DeleteSupplierLedgerByID(invoicePaymentID:any){
    return this.http.delete(this.apiurl+'/'+invoicePaymentID);
  }
  AddSupplierLedger(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }
}
