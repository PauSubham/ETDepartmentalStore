import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiurl_emp='http://localhost:57454/api/EmployeeDetails'

  constructor(private http:HttpClient) { }


LoadAllEmployee(){
  return this.http.get(this.apiurl_emp);
}
EmployeeByID(employeeID:any){
  return this.http.get(this.apiurl_emp+'/'+employeeID);
}
DeleteEmployeeByID(employeeID:any){
  return this.http.delete(this.apiurl_emp+'/'+employeeID);
}
AddEmployee(inputdata:any){
  return this.http.post(this.apiurl_emp,inputdata);
}

}
