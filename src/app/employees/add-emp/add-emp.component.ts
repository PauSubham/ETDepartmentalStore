import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  saveresponce: any;
  messageclass = '';
  message = '';
  EditData: any;
  EmployeeID: any;

  constructor(private service: EmployeeService, private route: ActivatedRoute) {
    this.EmployeeID = this.route.snapshot.paramMap.get('id');
    if (this.EmployeeID != null && this.EmployeeID != 0) {
      this.UpdateEmployee(this.EmployeeID);
    }
  }

  ngOnInit(): void {
  }



  UpdateEmployee(employeeID: any) {
    this.service.EmployeeByID(employeeID).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.employeeform = new FormGroup({
          employeeID: new FormControl(this.EditData.employeeID),
          employeeName: new FormControl(this.EditData.employeeName),
          phoneNumber: new FormControl(this.EditData.phoneNumber),
          mailID: new FormControl(this.EditData.mailID),
          address1: new FormControl(this.EditData.address1),
        });
      }
    })

  }

  employeeform = new FormGroup({
    employeeID: new FormControl('', Validators.required),
    employeeName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    mailID: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    address1: new FormControl('', Validators.required),
  });


  AddEmployee() {
    if (this.employeeform.valid) {
      //console.log(this.employeeform.value);
      this.service.AddEmployee(this.employeeform.value).subscribe(result => {
        this.saveresponce = result;
        this.message = "Saved Successfully";
        this.messageclass = 'success';
      });

    }
    else {
      this.message = "Please Enter Valid Data";
      this.messageclass = 'error';
    }
  }

  get employeeID() {
    return this.employeeform.get('employeeID');
  }

  get employeeName() {
    return this.employeeform.get('employeeName');
  }

  get phoneNumber() {
    return this.employeeform.get('phoneNumber');
  }

  get mailID() {
    return this.employeeform.get('mailID');
  }

  get address1() {
    return this.employeeform.get('address1');
  }

}
