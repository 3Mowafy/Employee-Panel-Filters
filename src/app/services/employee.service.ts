import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _URL = 'assets/data/db.json';

  constructor(private _http: HttpClient) {}

  getEmployeesData(): Observable<Employee> {
    return this._http.get<Employee>(this._URL);
  }
}
