import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user.service';
import { from } from 'rxjs';
import { ToProfileComponent } from './to-profile/to-profile.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent,ToProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
    ToProfileComponent
  ]
})
export class UserModule { }
