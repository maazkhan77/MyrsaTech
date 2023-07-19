import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private REST_API_SERVER = 'http://localhost:5500';

  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get<any>(this.REST_API_SERVER + '/api/employee');
  }

  getEmployeeById(id: number) {
    return this.http.get<any>(this.REST_API_SERVER + '/api/employee/' + id);
  }

  getEmployeeByName(name: string) {
    // Setup name query parameter
    let params = new HttpParams().set('name', name);
    return this.http.get<any>(this.REST_API_SERVER + '/api/employee/', {
      params: params,
    });
  }

  addEmployee(data: any) {
    return this.http.post<any>(this.REST_API_SERVER + '/api/employee', data);
  }

  updateEmployee(data: any, id: number) {
    return this.http.put<any>(
      this.REST_API_SERVER + `/api/employee/${id}`,
      data
    );
  }

  deleteAllEmployees() {
    return this.http.delete<any>(this.REST_API_SERVER + '/api/employee');
  }

  deleteEmployeeById(id: number) {
    return this.http.delete<any>(this.REST_API_SERVER + '/api/employee/' + id);
  }
}
