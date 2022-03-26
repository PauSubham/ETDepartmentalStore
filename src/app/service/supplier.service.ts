import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  apiurl='http://localhost:57454/api/SupplierDetails'

  constructor(private http:HttpClient) { }

  LoadAllSupplier(){
    return this.http.get(this.apiurl)
  }
  SupplierByID(supplierID:any){
    return this.http.get(this.apiurl+'/'+supplierID);
  }
  DeleteSupplierByID(supplierID:any){
    return this.http.delete(this.apiurl+'/'+supplierID);
  }
  AddSupplier(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }
}