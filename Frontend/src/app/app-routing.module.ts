import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeMasterComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
