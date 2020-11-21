import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { PageMessageComponent } from './page-message/page-message.component';
import { ControlMenuComponent } from './control-menu/control-menu.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { RecipeModule } from '../recipe/recipe.module';



@NgModule({
  declarations: [HomePageComponent, PageMessageComponent, ControlMenuComponent, AboutPageComponent, ContactPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    RecipeModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomeModule { }
