import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { merge } from 'rxjs';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss'],
})
export class FiltersPanelComponent {
  employeesFilter = new FormGroup({
    name: new FormControl(''),
    employmentDate: new FormControl(''),
    department: new FormControl(''),
    salary: new FormControl(''),
    experience: new FormControl(''),
  });
  toppings = new FormControl('');

  toppingList: string[] = ['Finance', 'iT', 'Front End', 'Back End'];

  constructor(private _router: Router) {}

  formFilter() {
    const formName = this.employeesFilter.value;

    this._router.navigate(['employeeslist'], {
      queryParams: {
        name: formName.name,
        employmentDate: formName.employmentDate,
        department: formName.department,
        salary: formName.salary,
        experience: formName.experience,
      },
      queryParamsHandling: 'merge',
    });
  }

  resetFilter() {
    this.employeesFilter.reset();
    this._router.navigateByUrl('employeeslist');
  }
}
