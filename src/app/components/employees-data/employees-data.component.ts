import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-data',
  templateUrl: './employees-data.component.html',
  styleUrls: ['./employees-data.component.scss'],
})
export class EmployeesDataComponent implements OnInit {
  employeesData: Employee[] = [];
  employeesList: Employee[] = [];

  displayedColumns: string[] = [
    'name',
    'employmentDate',
    'salary',
    'experience',
    'department',
  ];

  constructor(private _data: EmployeeService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.showEmployeesData();
    this.applyFilter();
  }

  showEmployeesData() {
    return this._data.getEmployeesData().subscribe((res: any) => {
      this.employeesData = res;
      this.employeesList = this.employeesData;
    });
  }

  setFilter(val: Employee) {
    this.employeesList = [];
    this.employeesList = this.employeesData.filter((data: Employee) => {
      const { name, employmentDate, department, salary, experience } = val;

      const dateParam = new Date(
        JSON.stringify(employmentDate)
      ).toLocaleDateString('en-GB');

      return (
        (name ? data.name?.toLowerCase().includes(name.toLowerCase()) : true) &&
        (employmentDate ? data.employmentDate?.includes(dateParam) : true) &&
        (experience == '1'
          ? data.experience?.toLowerCase().includes('less')
          : experience == '2'
          ? data.experience?.toLowerCase().match(/[2-3]+/g)
          : experience == '3'
          ? data.experience?.toLowerCase().match(/([3-9]|[1-4][0-9])/g)
          : true) &&
        (salary ? data.salary?.toString().includes(salary.toString()) : true) &&
        (department
          ? department.find((item) => data.department?.includes(item))
          : true)
      );
    });
  }

  applyFilter() {
    this._route.queryParams.subscribe((params: Employee) => {
      this.setFilter(params);
    });
  }
}
