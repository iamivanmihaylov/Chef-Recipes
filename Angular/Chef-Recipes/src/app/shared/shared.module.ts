import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from '../user/login/login.component';
import { IconComponent } from './icon/icon.component';
import { ShareComponent } from './share/share.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';



@NgModule({
  declarations: [NotFoundComponent,PaginationComponent, ErrorComponent, LoadingComponent, IconComponent, ShareComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxQRCodeModule
  ],
  exports: [
    PaginationComponent,
    ErrorComponent,
    LoadingComponent,
    IconComponent,
    ShareComponent,
  ]
})
export class SharedModule { }
