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
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component'
import { RecipeModule } from '../recipe/recipe.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent,ToProfileComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    UserRoutingModule,
    RecipeModule
  ],
  exports:[
    ToProfileComponent
  ]
})
export class UserModule { }
