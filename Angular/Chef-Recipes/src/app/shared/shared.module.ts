import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from '../user/login/login.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [NotFoundComponent,PaginationComponent, ErrorComponent, LoadingComponent, IconComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginationComponent,
    ErrorComponent,
    LoadingComponent,
    IconComponent
  ]
})
export class SharedModule { }
