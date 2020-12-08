import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [NavigationComponent, FooterComponent,],
  imports: [
    CommonModule,
    RouterModule,
    UserModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ]
})
export class CoreModule { }
