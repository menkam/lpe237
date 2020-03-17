import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaleUpdateMomoPage } from './modale-update-momo.page';

const routes: Routes = [
  {
    path: '',
    component: ModaleUpdateMomoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaleUpdateMomoPageRoutingModule {}
