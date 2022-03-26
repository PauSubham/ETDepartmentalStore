import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDesignationService {

  apiurl='http://localhost:57454/api/EmployeeDesignation'

  constructor(private http:HttpClient) { }

  LoadAllEmployeeDesignation(){
    return this.http.get(this.apiurl)
  }
  EmployeeDesignationByName(designationName:any){
    return this.http.get(this.apiurl+'/'+designationName);
  }
  DeleteEmployeeDesignationByName(designationName:any){
    return this.http.delete(this.apiurl+'/'+designationName);
  }
  AddEmployeeDesignation(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }
}