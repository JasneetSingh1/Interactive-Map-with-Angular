import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailDetailComponent } from './detail-detail/detail-detail.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    DetailDetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    HttpClientModule
  ],
  exports: [
    DetailDetailComponent
  ]
})
export class DetailModule { }
