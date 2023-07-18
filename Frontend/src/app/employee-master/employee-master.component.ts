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
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      empcode: [''],
      grade: [''],
      email: [''],
    });
  }

  addEmployee(data: employeeModel) {
    this.api.addEmployee(data).subscribe((res) => {
      console.log(res);
    });
  }
}
