import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user.service';
import { from } from 'rxjs';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class UserModule { }
