import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './home/about-page/about-page.component';
import { ContactPageComponent } from './home/contact-page/contact-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
