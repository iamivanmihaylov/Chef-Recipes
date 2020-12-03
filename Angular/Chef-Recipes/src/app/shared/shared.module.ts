import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [NotFoundComponent,PaginationComponent, ErrorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginationComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
