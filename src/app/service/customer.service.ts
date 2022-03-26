import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiurl='http://localhost:57454/api/CustomerDetails'

  constructor(private http:HttpClient) { }

  LoadAllCustomer(){
    return this.http.get(this.apiurl)
  }
  CustomerByID(customerID:any){
    return this.http.get(this.apiurl+'/'+customerID);
  }
  DeleteCustomerByID(customerID:any){
    return this.http.delete(this.apiurl+'/'+customerID);
  }
  AddCustomer(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }
}
