import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesDataComponent } from './components/employees-data/employees-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'employeeslist', pathMatch: 'full' },
  { path: 'employeeslist', component: EmployeesDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
