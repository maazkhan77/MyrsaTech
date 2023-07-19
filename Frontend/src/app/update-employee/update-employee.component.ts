import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { employeeModel } from '../employee-master/employeeModel';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  public dataId!: number;
  public employee!: employeeModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      this.dataId = param['get']('id');
    });
    this.api.getEmployeeById(this.dataId).subscribe((data: any) => {
      this.employee = data[0];
    });
  }

  updateEmployee() {
    this.api.updateEmployee(this.employee, this.dataId).subscribe(res => {
      console.log("here", res)
      this.router.navigate(["/"]);
    }, err => this.router.navigate(["/"]));
  }
}
