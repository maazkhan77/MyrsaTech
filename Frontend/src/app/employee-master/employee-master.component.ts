import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { employeeModel } from './employeeModel';

@Component({
  selector: 'app-employee-master',
  templateUrl: './employee-master.component.html',
  styleUrls: ['./employee-master.component.css'],
})
export class EmployeeMasterComponent implements OnInit {
  formValue!: FormGroup;
  data: undefined | employeeModel[];
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      empcode: [''],
      grade: [''],
      email: [''],
    });
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.api.getAllEmployees().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  getEmployeeByName(event: any) {
    this.api.getEmployeeByName(event.target.value).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  addEmployee(data: employeeModel) {
    this.api.addEmployee(data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.formValue.reset();
        this.getAllEmployees();
      }
    );
  }

  deleteAllEmployees() {
    this.api.deleteAllEmployees().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => this.getAllEmployees()
    );
  }

  deleteEmployeeById(Id: number) {
    this.api.deleteEmployeeById(Id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => this.getAllEmployees()
    );
  }
}
