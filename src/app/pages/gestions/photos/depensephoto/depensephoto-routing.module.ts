import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepensephotoPage } from './depensephoto.page';

const routes: Routes = [
  {
    path: '',
    component: DepensephotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepensephotoPageRoutingModule {}
