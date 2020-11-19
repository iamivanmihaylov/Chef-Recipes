import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageMessageComponent } from './page-message/page-message.component';
import { SharedModule } from '../shared/shared.module';
import { ControlMenuComponent } from './control-menu/control-menu.component';



@NgModule({
  declarations: [HomeComponent, PageMessageComponent, ControlMenuComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
