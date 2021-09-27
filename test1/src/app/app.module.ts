import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {CalanderComponent} from './calander/calander.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    CalanderComponent,
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
