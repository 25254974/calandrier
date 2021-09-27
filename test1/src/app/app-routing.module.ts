import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {CalanderComponent} from './calander/calander.component';
const routes: Routes = [
  {path: "ajout", component: AjoutComponent},
  {path: "home", component: HomeComponent},
  {path: "calander", component: CalanderComponent},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
