import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:8080/api/v1/employees';
  constructor(private httpClient: HttpClient) { }

  getEpmloyeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL)
  }

  addEmployee(body: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(this.baseURL,body);
  }

  getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+'/'+id);
  }

  updateEmployee(id:number,emp:Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(this.baseURL+'/'+id,emp);
  }

  deleteEmployee(id:number){
    return this.httpClient.delete(this.baseURL+'/'+id);
  }

}
