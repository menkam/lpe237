import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptemomoPage } from './comptemomo.page';

const routes: Routes = [
  {
    path: '',
    component: ComptemomoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptemomoPageRoutingModule {}
