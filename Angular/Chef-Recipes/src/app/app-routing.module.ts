import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './home/about-page/about-page.component';
import { ContactPageComponent } from './home/contact-page/contact-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { RecipeOpenComponent } from './recipe/recipe-open/recipe-open.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

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
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeOpenComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
