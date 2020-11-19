import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageMessageComponent } from './page-message/page-message.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, PageMessageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
