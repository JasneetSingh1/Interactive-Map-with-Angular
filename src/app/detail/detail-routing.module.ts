import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailDetailComponent } from './detail-detail/detail-detail.component';

const routes: Routes = [
  { path: 'detail', component: DetailDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
