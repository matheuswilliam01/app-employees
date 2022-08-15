import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableEmployeesComponent } from './table-employees/table-employees.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TableEmployeesComponent,
    AddEmployeComponent,
    EditEmployeComponent,
    LoginComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TableEmployeesComponent,
    AddEmployeComponent,
    EditEmployeComponent,
    LoginComponent,
    AddUserComponent
  ]
})
export class PagesModule { }
