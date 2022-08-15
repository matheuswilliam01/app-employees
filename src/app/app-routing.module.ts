import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AddEmployeComponent } from './pages/add-employe/add-employe.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditEmployeComponent } from './pages/edit-employe/edit-employe.component';
import { LoginComponent } from './pages/login/login.component';
import { TableEmployeesComponent } from './pages/table-employees/table-employees.component';
import { ExitComponent } from './utils/exit/exit.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: TableEmployeesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "new",
    component: AddEmployeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "edit/:id",
    component: EditEmployeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: AddUserComponent
  },  
  {
    path: "logout",
    component: ExitComponent
  },  
  {
    path: "**",
    component: Error
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
