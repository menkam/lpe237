import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurerapplicationPage } from './restaurerapplication.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurerapplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurerapplicationPageRoutingModule {}
