import { Component, OnInit } from '@angular/core';
import { EmployeeDesignationService } from 'src/app/service/employee-designation.service';

@Component({
  selector: 'app-show-emp-desg',
  templateUrl: './show-emp-desg.component.html',
  styleUrls: ['./show-emp-desg.component.css']
})
export class ShowEmpDesgComponent implements OnInit {

  employeedesignationdata: any;
  constructor(private service: EmployeeDesignationService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllEmployeeDesignation().subscribe(result => {
      this.employeedesignationdata = result;
    });
  }
  delete(designationName: any) {
    if (confirm("Do You Want to Delete?")) {
      this.service.DeleteEmployeeDesignationByName(designationName).subscribe(result => {
        this.LoadAll();
      })
    }
  }

}
