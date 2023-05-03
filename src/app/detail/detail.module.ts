import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailDetailComponent } from './detail-detail/detail-detail.component';




@NgModule({
  declarations: [
    DetailDetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
  ],
  exports: [
    DetailDetailComponent
  ]
})
export class DetailModule { }
