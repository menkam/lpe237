import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilanmomoPage } from './bilanmomo.page';

const routes: Routes = [
  {
    path: '',
    component: BilanmomoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilanmomoPageRoutingModule {}
