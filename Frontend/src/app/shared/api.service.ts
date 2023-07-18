import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private REST_API_SERVER = 'http://localhost:5500';

  constructor(private http: HttpClient) {}

   addEmployee(data: any) {
    return this.http.post<any>(this.REST_API_SERVER + '/api/employee', data);
  }
}
