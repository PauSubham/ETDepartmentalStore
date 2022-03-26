import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDesignationService } from 'src/app/service/employee-designation.service';

@Component({
  selector: 'app-add-emp-desg',
  templateUrl: './add-emp-desg.component.html',
  styleUrls: ['./add-emp-desg.component.css']
})
export class AddEmpDesgComponent implements OnInit {
  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  ID: any;
  constructor(private service: EmployeeDesignationService, private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('id');
    if (this.ID != null && this.ID != 0) {
      this.UpdateEmployeeDesignation(this.ID);
    }
  }

  ngOnInit(): void {
  }

  UpdateEmployeeDesignation(designationName: any) {
    this.service.EmployeeDesignationByName(designationName).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.employeedesignationform = new FormGroup({
          designationName: new FormControl(this.EditData.designationName),
          roleName: new FormControl(this.EditData.roleName),
          departmentName: new FormControl(this.EditData.departmentName),
        });
      }
    })
  }

  employeedesignationform = new FormGroup({
    designationName: new FormControl('', Validators.required),
    roleName: new FormControl('', Validators.required),
    departmentName: new FormControl('', Validators.required),
  });

  AddEmployeeDesignation() {
    if (this.employeedesignationform.valid) {
      this.service.AddEmployeeDesignation(this.employeedesignationform.value).subscribe(result => {
        this.saveresponce = result;
        this.message = "Saved Successfully"
        this.messageclass = 'success'
      })
    } else {
      this.message = "Please Enter Valid Data"
      this.messageclass = 'error'
    };
  };

  get designationName() {
    return this.employeedesignationform.get('designationName')
  }

  get roleName() {
    return this.employeedesignationform.get('roleName')
  }

  get departmentName() {
    return this.employeedesignationform.get('departmentName')
  }

}
