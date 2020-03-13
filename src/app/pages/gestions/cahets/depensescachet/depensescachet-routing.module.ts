import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepensescachetPage } from './depensescachet.page';

const routes: Routes = [
  {
    path: '',
    component: DepensescachetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepensescachetPageRoutingModule {}
