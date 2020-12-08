import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from '../user/login/login.component';



@NgModule({
  declarations: [NotFoundComponent,PaginationComponent, ErrorComponent, LoadingComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginationComponent,
    ErrorComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
