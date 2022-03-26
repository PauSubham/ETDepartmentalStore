import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
employeedata:any;
  constructor(private service: EmployeeService) {
    this.LoadAll();
   }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllEmployee().subscribe(result => {
      this.employeedata=result;
    });
  }
  delete(employeeID:any){
    if(confirm("Do You Want To Delete")){
      this.service.DeleteEmployeeByID(employeeID).subscribe(result=>{
        this.LoadAll();
      })
    }

  }

}
